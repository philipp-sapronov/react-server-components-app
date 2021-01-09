FROM node:14.15.3

WORKDIR /opt/contact-book-app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]
