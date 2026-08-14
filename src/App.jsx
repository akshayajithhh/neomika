import React, { useEffect, useState } from 'react';
import MusicController from './components/MusicController';
import FloatingDecorations from './components/FloatingDecorations';
import InvitationHero from './components/InvitationHero';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import ClosingMessage from './components/ClosingMessage';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to animate in each section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="page-wrapper">
      {/* Top Gold Scroll Progress Bar */}
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      ></div>

      {/* Background Soft Ambient Light Glows */}
      <FloatingDecorations />

      {/* Floating Audio Melody Control */}
      <MusicController />

      {/* 1. Hero Invitation Card Centerpiece */}
      <InvitationHero />

      {/* 2. Live Countdown & Calendar Integration */}
      <Countdown />

      {/* 3. Event Schedule & Blanco Convention Venue Guide */}
      <EventDetails />

      {/* 4. Closing Signature & Send Birthday Wishes */}
      <ClosingMessage />
    </div>
  );
}
