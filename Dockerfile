FROM node:20-alpine

RUN apk add --no-cache bash python3 make g++

WORKDIR /app

COPY package.json ./
RUN rm -f yarn.lock package-lock.json && yarn install

COPY . .
RUN yarn build

CMD ["yarn", "start"]