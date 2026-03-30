import { SITE_TEXTS } from '../config/texts';

export function InvitationSection() {
  const { invitation } = SITE_TEXTS;

  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: '#EBECCC' }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative Element */}
        <div className="mb-12">
          <svg width="80" height="40" viewBox="0 0 80 40" className="mx-auto">
            <path
              d="M 10 20 Q 25 10, 40 20 T 70 20"
              stroke="#CDD4B1"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="40" cy="20" r="3" fill="#CDD4B1" />
          </svg>
        </div>

        <h2
          className="text-6xl md:text-7xl mb-10"
          style={{
            fontFamily: 'Cormorant, serif',
            color: '#8B9474',
            fontWeight: '400'
          }}
        >
          {invitation.title}
        </h2>

        <p
          className="text-2xl md:text-3xl mb-16 leading-relaxed max-w-2xl mx-auto"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            color: '#6B7456',
            fontWeight: '300'
          }}
        >
          {invitation.text}
        </p>

        {/* Date Highlight */}
        <div
          className="inline-block px-16 py-10 rounded-lg mb-8"
          style={{ backgroundColor: '#FFF9E2' }}
        >
          <div
            className="text-4xl md:text-5xl mb-3"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#CDD4B1',
              fontWeight: '300',
              letterSpacing: '0.1em'
            }}
          >
            {invitation.date}
          </div>
          <div
            className="text-2xl tracking-wider"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              color: '#8B9474',
              fontWeight: '300'
            }}
          >
            {invitation.dateLabel}
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-12">
          <svg width="80" height="40" viewBox="0 0 80 40" className="mx-auto">
            <path
              d="M 10 20 Q 25 30, 40 20 T 70 20"
              stroke="#CDD4B1"
              strokeWidth="1.5"
              fill="none"
            />
            <circle cx="40" cy="20" r="3" fill="#CDD4B1" />
          </svg>
        </div>
      </div>
    </section>
  );
}