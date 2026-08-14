import React from 'react';
import { Heart, ChevronUp, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ClosingMessage() {
  const whatsappNumber = "919645938443";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSendWishes = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#b8924b', '#bd756b', '#586b4c', '#f5ede2']
    });

    const text = encodeURIComponent("Happy 1st Birthday dearest Neomika! 🌸 Wishing you endless happiness and blessings on your special day!");
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <footer className="scroll-reveal" style={{ paddingTop: '0.5rem', paddingBottom: '3rem', textAlign: 'center' }}>
      <div className="content-container">
        
        <div className="luxury-card" style={{ textAlign: 'center' }}>
          
          <div style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            background: 'rgba(189, 117, 107, 0.15)',
            border: '1px solid rgba(189, 117, 107, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 0.75rem auto',
            color: '#bd756b'
          }}>
            <Heart size={16} fill="currentColor" />
          </div>

          <h3 className="font-heading" style={{ fontSize: '1.45rem', fontWeight: '500', color: '#2B1D14', margin: '0 0 0.4rem 0' }}>
            We can't wait to celebrate with you
          </h3>

          <p style={{ fontSize: '0.82rem', color: '#786352', margin: '0 auto 1rem auto', maxWidth: '320px', lineHeight: 1.45 }}>
            Your love, presence, and blessings mean everything to our little princess.
          </p>

          <div style={{ marginBottom: '1.25rem' }}>
            <span className="font-script" style={{ fontSize: '1.6rem', color: '#b8924b', display: 'block', lineHeight: 1.1 }}>
              With all our love,
            </span>
            <div className="font-heading" style={{ fontSize: '1.75rem', color: '#2B1D14', lineHeight: 1.2, fontWeight: '600', marginTop: '0.2rem' }}>
              Neomika & Family
            </div>
            <span className="font-label" style={{ fontSize: '0.62rem', letterSpacing: '0.18em', color: '#9c8471', display: 'block', marginTop: '0.35rem' }}>
              AKSHAY & FAMILY • KOZHIKODE
            </span>
          </div>

          {/* Direct WhatsApp Wish Button */}
          <div style={{ marginBottom: '1.25rem' }}>
            <button
              onClick={handleSendWishes}
              className="btn-whatsapp"
              style={{ fontSize: '0.78rem', padding: '0.7rem 1.4rem' }}
            >
              <MessageCircle size={15} />
              <span>Send Birthday Wishes on WhatsApp</span>
            </button>
          </div>

          {/* Back to Top */}
          <div style={{
            paddingTop: '0.85rem',
            borderTop: '1px solid rgba(210, 185, 155, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <span className="font-label" style={{ fontSize: '0.6rem', letterSpacing: '0.12em', color: '#9d8573' }}>
              ✦ 1ST BIRTHDAY CELEBRATION ✦
            </span>
            
            <button
              onClick={scrollToTop}
              className="btn-secondary"
              style={{ fontSize: '0.62rem', padding: '0.4rem 0.85rem' }}
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ChevronUp size={13} />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
