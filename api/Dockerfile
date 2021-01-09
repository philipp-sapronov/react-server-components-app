#### Developmet stage ####
FROM node:14.5.0-alpine3.11

WORKDIR /opt/contact-book-app

COPY package.json yarn.lock ./
RUN yarn install

COPY tsconfig.json tsconfig.build.json .eslintrc.js nest-cli.json .prettierrc ./
COPY src ./src

ENTRYPOINT [ "yarn", "run" ]
CMD [ "start:dev" ]
