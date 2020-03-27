FROM trion/ng-cli

ADD package.json /app/
ADD package-lock.json /app/

WORKDIR /app

RUN npm ci

ADD . /app
