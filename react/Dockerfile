FROM node:14.15.3

WORKDIR /opt/notes-app

COPY package.json ./

RUN yarn install

COPY . .

ENTRYPOINT [ "yarn", "run" ]
CMD [ "start" ]
