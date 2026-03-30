import { ImageWithFallback } from './figma/ImageWithFallback';
import { IMAGES } from '../config/images';
import { THEME_CONFIG } from '../config/theme';
import { SITE_TEXTS } from '../config/texts';

interface HeroSectionProps {
  scrollY: number;
}

export function HeroSection({ scrollY }: HeroSectionProps) {
  const { hero } = SITE_TEXTS;
  
  return (
    <section className="relative h-screen flex items-end justify-center overflow-hidden pb-0">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <ImageWithFallback
          src={IMAGES.couple}
          alt={`${hero.groomName} и ${hero.brideName}`}
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 249, 226, 0.3) 0%, rgba(255, 249, 226, 0.8) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-2 mt-20">
        <div className="mb-0">
          <h1 
            className="text-8xl md:text-8xl mb-0"
            style={{ 
              fontFamily: 'Great Vibes, cursive',
              color: THEME_CONFIG.hero.namesColor,
              fontWeight: '100',
              letterSpacing: '0.02em',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            {hero.groomName}
          </h1>
          <div 
            className="text-5xl md:text-6xl my-0"
            style={{ 
              fontFamily: 'Great Vibes, cursive',
              color: THEME_CONFIG.hero.namesColor,
              fontWeight: '400',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            {hero.separator}
          </div>
          <h1 
            className="text-8xl md:text-8xl"
            style={{ 
              fontFamily: 'Great Vibes, cursive',
              color: THEME_CONFIG.hero.namesColor,
              fontWeight: '400',
              letterSpacing: '0.02em',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            {hero.brideName}
          </h1>
        </div>

        <div 
          className="text-3xl md:text-4xl tracking-widest mt-10"
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            color: THEME_CONFIG.hero.dateColor,
            fontWeight: '300',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
          }}
        >
          {hero.date}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce ">
        <div 
          className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
          style={{ borderColor: '#CDD4B1' }}
        >
          <div 
            className="w-1 h-2 rounded-full"
            style={{ backgroundColor: '#CDD4B1' }}
          />
        </div>
      </div>
    </section>
  );
}