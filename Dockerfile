FROM trion/ng-cli
ADD package.json /app/

WORKDIR /app

RUN npm install

ADD . /app
