FROM node:alpine

ADD . /app
WORKDIR /app

RUN npm i -g yarn typescript pm2

RUN yarn install
RUN pm2 start ./dist/bootstrap.js
EXPOSE 3000