FROM node:20-alpine

WORKDIR /app

RUN apk update && apk add --no-cache libc6-compat bash

# Копируем только необходимые файлы для установки зависимостей
COPY package.json yarn.lock ./

# Активируем Corepack и устанавливаем Yarn
RUN npm install -g corepack && corepack enable && corepack prepare yarn@4.9.1 --activate

# Устанавливаем зависимости (без --immutable, чтобы не падало)
RUN yarn install

# Копируем весь проект
COPY . .

# Открываем порт dev-сервера Vite
EXPOSE 5173


# Запускаем dev-сервер
CMD ["yarn", "dev", "--host", "0.0.0.0"]