# Используем Node.js 20 Alpine как базовый образ
FROM node:20-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Обновляем систему и устанавливаем необходимые пакеты
RUN apk update && apk upgrade && \
    apk add --no-cache libc6-compat && \
    npm install -g corepack && \
    corepack enable && \
    corepack prepare yarn@4.9.1 --activate

# Копируем файлы конфигурации для установки зависимостей
COPY package.json ./
COPY yarn.lock* ./

# Копируем все файлы проекта
COPY . .

# Проверяем скопированные файлы (для отладки)
RUN ls -la
RUN ls -la ./src/

# Устанавливаем зависимости
RUN yarn install --immutable

# Собираем приложение
RUN yarn build

# Используем nginx для раздачи статических файлов
FROM nginx:alpine

# Копируем собранное приложение из предыдущего этапа
COPY --from=builder /app/dist /usr/share/nginx/html

# Создаем конфигурацию nginx для SPA (Single Page Application)
RUN echo 'server { \n\
    listen 80; \n\
    server_name _; \n\
    root /usr/share/nginx/html; \n\
    index index.html; \n\
    location / { \n\
        try_files $uri $uri/ /index.html; \n\
    } \n\
    # Gzip compression \n\
    gzip on; \n\
    gzip_vary on; \n\
    gzip_min_length 1024; \n\
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json application/xml+rss; \n\
}' > /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
