// Конфигурация темы и стилей свадебного сайта

export const THEME_CONFIG = {
  // Цвета для HeroSection
  hero: {
    namesColor: '#FEECD0', // Цвет имен "Никита" и "Елизавета"
    dateColor: '#FEECD0',  // Цвет даты на главном экране
  },
  
  // Размеры карточек программы дня
  venueCards: {
    // Адаптивные размеры карточек
    cardWidth: {
      mobile: '100%',
      desktop: '100%', // В grid-колонках это будет 1/3 ширины
    },
    imageHeight: {
      mobile: '400px',
      desktop: '500px', // Высота изображения
    },
    cardPadding: {
      mobile: 'p-10',
      desktop: 'p-12', // Padding внутри карточки
    },
    // Максимальная ширина контейнера для карточек
    containerMaxWidth: '1700px',
  },
  
  // Параметры фильтра для фотографий программы дня
  imageFilter: {
    contrast: 1.05,        // Контрастность (1.0 = без изменений)
    saturate: 0.75,        // Насыщенность (0-1, где 1 = оригинал)
    brightness: 1.08,      // Яркость (1.0 = без изменений)
    sepia: 0.55,          // Эффект сепии (0-1)
    hueRotate: -5,        // Сдвиг оттенка в градусах
    overlayOpacity: {
      top: 0.15,          // Прозрачность верхней части оверлея
      bottom: 0.2,        // Прозрачность нижней части оверлея
    },
  },
} as const;

// Вспомогательная функция для генерации CSS фильтра
export function getImageFilterStyle() {
  const { contrast, saturate, brightness, sepia, hueRotate } = THEME_CONFIG.imageFilter;
  return `contrast(${contrast}) saturate(${saturate}) brightness(${brightness}) sepia(${sepia}) hue-rotate(${hueRotate}deg)`;
}

// Вспомогательная функция для генерации градиента оверлея
export function getImageOverlayStyle() {
  const { top, bottom } = THEME_CONFIG.imageFilter.overlayOpacity;
  return `linear-gradient(180deg, rgba(235, 236, 204, ${top}) 0%, rgba(205, 212, 177, ${bottom}) 100%)`;
}
