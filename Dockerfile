FROM node:20-alpine

RUN apk add --no-cache bash python3 make g++

WORKDIR /app

# Активируем Corepack и Yarn 4
RUN corepack enable && corepack prepare yarn@4.12.0 --activate

# Копируем package.json и yarn.lock (если есть)
COPY package.json ./

# Отключаем PnP и чистим старые lock-файлы
RUN echo "nodeLinker: node-modules" > .yarnrc.yml
RUN rm -f yarn.lock package-lock.json .pnp.cjs

# Устанавливаем зависимости через Yarn 4
RUN yarn install

# Копируем весь проект
COPY . .

# Сборка проекта
RUN yarn build

# Старт приложения
CMD ["yarn", "preview"]