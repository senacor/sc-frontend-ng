FROM node
ADD package.json /app/

WORKDIR /app

RUN npm install

# TODO
ADD . /app
