#!/bin/bash

API_SERVICE="api"
FRONTEND_SERVICE="react"
PROXY_SERVICE="proxy"
DEV="dev"
NO_DOCKER="no-docker"
BUILD="build"
SERVICES=($FRONTEND_SERVICE $PROXY_SERVICE $API_SERVICE)
OPTIONS=("$@")

function __echo {
  echo '\n'"$(tput setaf 2)"$@"$(tput sgr0)"'\n'
}

function run () {
  __echo "$@" && $@
}

function array_contains () {
  local seeking=$1; shift
  local in=1
  for it;
  do
    if [[ $it == "$seeking" ]]; then
      in=0
      break
    fi
  done
  return $in
}

function has_argument () {
  return $(array_contains $1 "${OPTIONS[@]}")
}

function is_no_docker () {
  return $(has_argument $NO_DOCKER)
}

function is_dev () {
  return $(has_argument $DEV)
}

function get_shold_build() {
  has_argument $BUILD && echo --build
}

function get_service () {
  local service=""
  for it in ${SERVICES[@]};
  do
    if has_argument $it; then
      service=$it
      break
    fi
  done
  echo $service
}

function get_compose_file () {
  if is_dev; then
    echo -f docker-compose.dev.yml
  fi
}

function start() {
  run docker-compose $(get_compose_file) up
}

function start_proxy () {
  run docker-compose $(get_compose_file) up -d $PROXY_SERVICE
}

function start_api () {
  if is_no_docker; then
    cd ./api && run yarn run dev
  else
    run docker-compose $(get_compose_file) up $(get_shold_build) $API_SERVICE
  fi
}

function start_frontend () {
  if is_no_docker; then
    cd ./frontend && run yarn run dev
  else
    run docker-compose $(get_compose_file) up $(get_shold_build) $FRONTEND_SERVICE
  fi
}

case $(get_service) in
  $PROXY_SERVICE)
    start_proxy
    ;;
  $API_SERVICE)
    start_api
    ;;
  $FRONTEND_SERVICE)
    start_frontend
    ;;
  *)
    start
    ;;
esac
