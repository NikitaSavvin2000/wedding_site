import { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { InvitationSection } from './components/InvitationSection';
import { VenueSection } from './components/VenueSection';
import { DressCodeSection } from './components/DressCodeSection';
import { Footer } from './components/Footer';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF9E2' }}>
      <HeroSection scrollY={scrollY} />
      <InvitationSection />
      <VenueSection />
      <DressCodeSection />
      <Footer />
    </div>
  );
}
