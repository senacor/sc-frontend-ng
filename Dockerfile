FROM trion/ng-cli
ADD package.json /app/

WORKDIR /app

RUN npm ci

ADD . /app
