FROM trion/ng-cli

COPY package.json /app/
COPY package-lock.json /app/

WORKDIR /app

RUN npm ci

COPY . /app
