# Свадебное приглашение - Никита и Елизавета

Элегантный свадебный сайт-приглашение с использованием пастельной цветовой палитры.

## Конфигурация

Все основные настройки вынесены в файлы конфигурации для удобного управления:

### `/src/app/config/theme.ts` - Настройки темы

**Цвета:**
- `THEME_CONFIG.hero.namesColor` - цвет имен "Никита" и "Елизавета" на главном экране (HEX)
- `THEME_CONFIG.hero.dateColor` - цвет даты на главном экране (HEX)

**Размеры карточек программы дня:**
- `THEME_CONFIG.venueCards.containerMaxWidth` - максимальная ширина контейнера карточек
- `THEME_CONFIG.venueCards.imageHeight` - высота изображений (mobile/desktop)
- `THEME_CONFIG.venueCards.cardPadding` - внутренние отступы карточек (mobile/desktop)

**Параметры фильтра фотографий:**
- `THEME_CONFIG.imageFilter.contrast` - контрастность (1.0 = оригинал)
- `THEME_CONFIG.imageFilter.saturate` - насыщенность (0-1)
- `THEME_CONFIG.imageFilter.brightness` - яркость (1.0 = оригинал)
- `THEME_CONFIG.imageFilter.sepia` - эффект сепии (0-1)
- `THEME_CONFIG.imageFilter.hueRotate` - сдвиг оттенка (градусы)
- `THEME_CONFIG.imageFilter.overlayOpacity` - прозрачность оверлея (top/bottom)

### `/src/app/config/images.ts` - Пути к изображениям

Управление всеми фотографиями сайта.

## Запуск с помощью Docker

### Требования
- Docker
- Docker Compose

### Инструкции по запуску

**Вариант 1: С использованием npm (рекомендуется)**

1. **Создайте файл `Dockerfile` в корне проекта** (если его нет):
   ```dockerfile
   FROM node:20-alpine AS builder
   WORKDIR /app
   RUN apk update && apk upgrade && apk add --no-cache libc6-compat
   COPY package*.json ./
   COPY . .
   RUN ls -la && ls -la ./src/
   RUN npm install
   RUN npm run build

   FROM nginx:alpine
   COPY --from=builder /app/dist /usr/share/nginx/html
   RUN echo 'server { listen 80; server_name _; root /usr/share/nginx/html; index index.html; location / { try_files $uri $uri/ /index.html; } gzip on; gzip_types text/plain text/css application/javascript application/json; }' > /etc/nginx/conf.d/default.conf
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

2. **Соберите и запустите контейнер:**
   ```bash
   docker-compose up -d --build
   ```

**Вариант 2: С использованием yarn**

Если вы хотите использовать Dockerfile.new с yarn:

1. Переименуйте файл:
   ```bash
   mv Dockerfile.new Dockerfile
   ```

2. Создайте yarn.lock (если его нет):
   ```bash
   npm install -g corepack
   corepack enable
   yarn install
   ```

3. Соберите и запустите:
   ```bash
   docker-compose up -d --build
   ```

### Приложение будет доступно по адресу:
```
http://localhost:3000
```

### Управление контейнером

**Остановить контейнер:**
```bash
docker-compose down
```

**Перезапустить контейнер:**
```bash
docker-compose restart
```

**Просмотр логов:**
```bash
docker-compose logs -f
```

**Пересобрать после изменений:**
```bash
docker-compose up -d --build
```

## Развертывание на сервере

1. Загрузите все файлы проекта на сервер
2. Убедитесь, что Docker и Docker Compose установлены
3. Запустите: `docker-compose up -d --build`
4. Настройте nginx/apache на вашем сервере для проксирования на порт 3000 (опционально)

### Пример конфигурации nginx для домена:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Технологии
- React 18
- Vite
- Tailwind CSS v4
- TypeScript
- Docker
- Nginx

## Цветовая палитра
- Eucalyptus: #CDD4B1
- Peach: #FEECD0
- Ivory: #FFF9E2
- Pistachio: #EBECCC

## Структура проекта
```
/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── InvitationSection.tsx
│   │   │   ├── VenueSection.tsx
│   │   │   ├── DressCodeSection.tsx
│   │   │   └── Footer.tsx
│   │   ├── config/
│   │   │   ├── theme.ts          # Конфигурация темы
│   │   │   └── images.ts         # Пути к изображениям
│   │   └── App.tsx
│   └── styles/
├── public/
│   └── images/
├── Dockerfile
├── Dockerfile.new                # Yarn версия
├── docker-compose.yml
└── package.json
```