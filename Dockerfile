FROM node:10

WORKDIR /usr/src/app/my-app

COPY ./ /usr/src/app/my-app/

RUN npm install

EXPOSE 8080
EXPOSE 3000

CMD npm run server & npm run client