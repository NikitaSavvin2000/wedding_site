# Инструкция по запуску с Docker и Yarn

## Важно! Перед использованием Dockerfile

Поскольку проект изначально использовал npm, но Dockerfile настроен на yarn, выполните следующие шаги:

### Вариант 1: Использование существующего Dockerfile.new с npm (рекомендуется)

Если у вас нет yarn.lock файла, можно использовать упрощенный Dockerfile с npm:

1. Создайте файл `Dockerfile` в корне проекта:

```dockerfile
# Используем Node.js 20 Alpine как базовый образ
FROM node:20-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Обновляем систему и устанавливаем необходимые пакеты
RUN apk update && apk upgrade && \
    apk add --no-cache libc6-compat

# Копируем файлы конфигурации
COPY package*.json ./

# Копируем все файлы проекта
COPY . .

# Проверяем скопированные файлы
RUN ls -la
RUN ls -la ./src/

# Устанавливаем зависимости
RUN npm install

# Собираем приложение
RUN npm run build

# Используем nginx для раздачи статических файлов
FROM nginx:alpine

# Копируем собранное приложение
COPY --from=builder /app/dist /usr/share/nginx/html

# Конфигурация nginx
RUN echo 'server { \n\
    listen 80; \n\
    server_name _; \n\
    root /usr/share/nginx/html; \n\
    index index.html; \n\
    location / { \n\
        try_files $uri $uri/ /index.html; \n\
    } \n\
    gzip on; \n\
    gzip_vary on; \n\
    gzip_min_length 1024; \n\
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/json; \n\
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

2. Соберите и запустите:
```bash
docker-compose up -d --build
```

### Вариант 2: Переход на Yarn

Если вы хотите использовать yarn (как в Dockerfile.new):

1. Установите yarn локально:
```bash
npm install -g corepack
corepack enable
corepack prepare yarn@4.9.1 --activate
```

2. Создайте yarn.lock:
```bash
yarn install
```

3. Переименуйте Dockerfile:
```bash
mv Dockerfile.new Dockerfile
```

4. Соберите и запустите:
```bash
docker-compose up -d --build
```

## Запуск приложения

После выбора варианта:

```bash
# Сборка и запуск
docker-compose up -d --build

# Просмотр логов
docker-compose logs -f

# Остановка
docker-compose down

# Перезапуск
docker-compose restart
```

Приложение будет доступно по адресу: http://localhost:3000

## Конфигурационные файлы

### Настройка темы
Откройте `/src/app/config/theme.ts` для изменения:
- Цветов текста (имена, даты)
- Размеров карточек программы дня
- Параметров фильтров фотографий

### Настройка изображений
Откройте `/src/app/config/images.ts` для изменения путей к фотографиям
