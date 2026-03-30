import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer
      className="py-16 px-6"
      style={{ backgroundColor: '#FEECD0' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Heart
            className="w-12 h-12 mx-auto mb-6"
            style={{ color: '#CDD4B1' }}
            fill="#CDD4B1"
          />
        </div>

        <p
          className="text-5xl md:text-7xl mb-6"
          style={{
            fontFamily: 'Cormorant, serif',
            color: '#8B9474',
            fontWeight: '400',
            fontStyle: 'italic'
          }}
        >
          С любовью,
        </p>

        <p
          className="text-3xl md:text-5xl mb-12"
          style={{
            fontFamily: 'Cormorant, serif',
            color: '#CDD4B1',
            fontWeight: '1600'
          }}
        >
          Никита & Елизавета
        </p>

        <div
          className="text-sm md:text-3xl mb-12"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#8B9474',
            fontWeight: '500'
          }}
        >
          19 августа 2026
        </div>
      </div>
    </footer>
  );
}