import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Clock, Copy, Check } from 'lucide-react';
import { IMAGES } from '../config/images';
import { THEME_CONFIG, getImageFilterStyle, getImageOverlayStyle } from '../config/theme';
import { SITE_TEXTS } from '../config/texts';
import { useState } from 'react';

export function VenueSection() {
  const { containerMaxWidth, imageHeight, cardPadding, cardWidth } = THEME_CONFIG.venueCards;
  const { venue } = SITE_TEXTS;

  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const copyToClipboard = async (address: string, label: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(label);
      setTimeout(() => setCopiedAddress(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const renderVenueCard = (venueItem: any, labelKey: string, imageSrc: string) => (
    <div
      className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
      style={{
        backgroundColor: '#FEECD0',
        width: cardWidth.mobile,
        maxWidth: '100%',
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          height: imageHeight.mobile,
        }}
      >
        <ImageWithFallback
          src={imageSrc}
          alt={venueItem.name}
          className="w-full h-full object-cover"
          style={{ filter: getImageFilterStyle() }}
        />
        <div
          className="absolute inset-0"
          style={{ background: getImageOverlayStyle(), mixBlendMode: 'multiply' }}
        />
      </div>

      <div className={cardPadding.mobile}>
        <div
          className="text-sm uppercase tracking-widest mb-4"
          style={{ fontFamily: 'Montserrat, sans-serif', color: '#CDD4B1', fontWeight: '500' }}
        >
          {venueItem.label}
        </div>
        <h3
          className="text-3xl mb-5 md:text-5xl"
          style={{ fontFamily: 'Cormorant, serif', color: '#4A5234', fontWeight: '600' }}
        >
          {venueItem.name}
        </h3>
        <div className="space-y-4 text-sm md:text-base">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 md:w-7 md:h-7 mt-0.5 flex-shrink-0" style={{ color: '#CDD4B1' }} />
            <span>{venueItem.time}</span>
          </div>
          <div
            onClick={() => copyToClipboard(venueItem.address, labelKey)}
            className="flex items-center justify-between gap-3 cursor-pointer group"
          >
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 md:w-7 md:h-7 mt-0.5 flex-shrink-0" style={{ color: '#CDD4B1' }} />
              <span className="border-b border-dashed transition-all duration-300 group-hover:border-[#8B9474]">
                {venueItem.address}
              </span>
            </div>
            <div className="flex-shrink-0 mt-1 opacity-50 group-hover:opacity-100 transition">
              {copiedAddress === labelKey ? (
                <Check className="w-4 h-4 md:w-5 md:h-5" style={{ color: '#8B9474' }} />
              ) : (
                <Copy className="w-4 h-4 md:w-5 md:h-5" style={{ color: '#CDD4B1' }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: '#FFF9E2' }}>
      <div className="mx-auto" style={{ maxWidth: containerMaxWidth }}>
        <h2
          className="text-3xl md:text-6xl text-center mb-12 md:mb-16"
          style={{ fontFamily: 'Cormorant, serif', color: '#8B9474', fontWeight: '400' }}
        >
          {venue.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {renderVenueCard(venue.registry, 'registry', IMAGES.zags)}
          {renderVenueCard(venue.photosession, 'photosession', IMAGES.arkhangelskoye)}
          {renderVenueCard(venue.banquet, 'banquet', IMAGES.serednikovo)}
        </div>
      </div>
    </section>
  );
}