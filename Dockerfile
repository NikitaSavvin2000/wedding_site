FROM node:20-alpine

RUN apk add --no-cache bash python3 make g++

WORKDIR /app

# Активируем Corepack и ставим нужную версию Yarn
RUN corepack enable && corepack prepare yarn@4.12.0 --activate

# Копируем package.json и очищаем lock-файлы
COPY package.json ./
RUN rm -f yarn.lock package-lock.json .pnp.cjs

# Устанавливаем зависимости через Yarn 4.x
RUN yarn install

# Копируем весь проект
COPY . .

# Сборка проекта
RUN yarn build

# Старт приложения
CMD ["yarn", "start"]