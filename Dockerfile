# Используем Node.js 20 Alpine как базовый образ
FROM node:20-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Обновляем систему и ставим необходимые пакеты
RUN apk update && apk add --no-cache libc6-compat bash

# Копируем package.json и lock-файл
COPY package.json ./
COPY yarn.lock* ./

# Устанавливаем зависимости
RUN npm install -g corepack && corepack enable && corepack prepare yarn@4.9.1 --activate
RUN yarn install --immutable

# Копируем весь проект
COPY . .

# Открываем порт для dev-сервера Vite
EXPOSE 5173

# Запускаем dev-сервер
CMD ["yarn", "dev", "--host", "0.0.0.0"]