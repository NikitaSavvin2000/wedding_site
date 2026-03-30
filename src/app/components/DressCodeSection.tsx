import { SITE_TEXTS } from '../config/texts';

export function DressCodeSection() {
  const { dressCode } = SITE_TEXTS;
  
  const colors = [
    { name: 'Eucalyptus', hex: '#CDD4B1' },
    { name: 'Peach', hex: '#FEECD0' },
    { name: 'Ivory', hex: '#FFF9E2' },
    { name: 'Pistachio', hex: '#EBECCC' },
  ];

  return (
    <section 
      className="py-24 px-6"
      style={{ backgroundColor: '#EBECCC' }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Decorative Element */}
        <div className="mb-12">
          <svg width="100" height="50" viewBox="0 0 100 50" className="mx-auto">
            <circle cx="30" cy="25" r="2" fill="#CDD4B1" />
            <path 
              d="M 35 25 Q 50 15, 65 25" 
              stroke="#CDD4B1" 
              strokeWidth="1.5" 
              fill="none"
            />
            <circle cx="70" cy="25" r="2" fill="#CDD4B1" />
          </svg>
        </div>

        <h2 
          className="text-5xl md:text-6xl text-center mb-8"
          style={{ 
            fontFamily: 'Cormorant, serif',
            color: '#8B9474',
            fontWeight: '400'
          }}
        >
          {dressCode.title}
        </h2>

        <p 
          className="text-lg text-center mb-16 max-w-2xl mx-auto leading-relaxed"
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            color: '#6B7456',
            fontWeight: '300'
          }}
        >
          {dressCode.mainText}
        </p>

        {/* Color Palette */}
        <div className="text-center mb-6">
          <h3 
            className="text-2xl mb-8"
            style={{ 
              fontFamily: 'Cormorant, serif',
              color: '#8B9474',
              fontWeight: '500'
            }}
          >
            {dressCode.paletteTitle}
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {colors.map((color) => (
            <div key={color.hex} className="flex flex-col items-center gap-4">
              <div 
                className="w-28 h-28 md:w-32 md:h-32 rounded-full shadow-xl transition-transform hover:scale-105"
                style={{ backgroundColor: color.hex }}
              />
              <div className="text-center">
                <div 
                  className="text-lg mb-1"
                  style={{ 
                    fontFamily: 'Cormorant, serif',
                    color: '#6B7456',
                    fontWeight: '600'
                  }}
                >
                  {color.name}
                </div>
                <div 
                  className="text-sm uppercase tracking-wider"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#8B9474',
                    fontWeight: '300'
                  }}
                >
                  {color.hex}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div 
          className="text-center text-base italic max-w-md mx-auto mt-12"
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            color: '#8B9474',
            fontWeight: '300'
          }}
        >
          {dressCode.avoidTitle}:<br />
          {dressCode.avoidColors.join(', ')}
        </div>

        {/* Decorative Element */}
        <div className="mt-12">
          <svg width="100" height="50" viewBox="0 0 100 50" className="mx-auto">
            <circle cx="30" cy="25" r="2" fill="#CDD4B1" />
            <path 
              d="M 35 25 Q 50 35, 65 25" 
              stroke="#CDD4B1" 
              strokeWidth="1.5" 
              fill="none"
            />
            <circle cx="70" cy="25" r="2" fill="#CDD4B1" />
          </svg>
        </div>
      </div>
    </section>
  );
}