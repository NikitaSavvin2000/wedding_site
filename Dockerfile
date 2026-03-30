FROM node:20-alpine

WORKDIR /app

RUN apk update && apk add --no-cache libc6-compat bash

COPY package.json yarn.lock ./

RUN npm install -g corepack && corepack enable && corepack prepare yarn@4.9.1 --activate

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "dev", "--host", "0.0.0.0"]