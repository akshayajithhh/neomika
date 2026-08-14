import React, { useState, useEffect } from 'react';
import { Calendar, Download, Share2, ZoomIn, X, ChevronDown, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function InvitationHero() {
  const [isZoomed, setIsZoomed] = useState(false);
  const whatsappNumber = "919645938443";

  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.35 },
        colors: ['#b8924b', '#bd756b', '#586b4c', '#f5ede2'],
        disableForReducedMotion: true
      });
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Neomika's 1st Birthday Celebration 🌸",
        text: "You're warmly invited to celebrate baby Neomika's 1st Birthday on 22nd August 2026 at Blanco Convention Centre, Kannanchery!",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Invitation link copied to clipboard! You can paste and share it on WhatsApp.");
    }
  };

  const handleSendWishes = () => {
    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#b8924b', '#bd756b', '#586b4c', '#f5ede2']
    });

    const text = encodeURIComponent("Happy 1st Birthday dearest Neomika! 🌸 Wishing you endless joy, laughter, and blessings on your special milestone!");
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="scroll-reveal" style={{ paddingTop: '1.25rem', paddingBottom: '1.75rem' }}>
      <div className="content-container">
        
        {/* Top Badge Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.3rem 1rem',
            background: 'rgba(255, 255, 255, 0.88)',
            borderRadius: '9999px',
            border: '1px solid rgba(184, 146, 75, 0.4)',
            marginBottom: '0.65rem',
            boxShadow: '0 2px 8px rgba(60,40,20,0.06)'
          }}>
            <span style={{ fontSize: '0.75rem' }}>🌸</span>
            <span className="font-label" style={{ fontSize: '0.65rem', fontWeight: '600', color: '#7a5d33', letterSpacing: '0.16em' }}>
              OFFICIAL INVITATION
            </span>
            <span style={{ fontSize: '0.75rem' }}>🌸</span>
          </div>

          <h1 className="font-heading" style={{ fontSize: '2rem', fontWeight: '500', color: '#2B1D14', margin: 0 }}>
            Neomika is Turning One
          </h1>
          <p className="font-script" style={{ fontSize: '1.6rem', color: '#786352', marginTop: '0.1rem', lineHeight: 1.1 }}>
            come celebrate with fun, food, and cake
          </p>
        </div>

        {/* The Invitation Card Frame */}
        <div className="invitation-frame" onClick={() => setIsZoomed(true)}>
          <div className="invitation-img-wrap">
            <img
              src="/images/invitation_card.jpg"
              alt="Neomika's Birthday Invitation Card"
            />
          </div>

          <div style={{ textAlign: 'center', paddingTop: '0.65rem', paddingBottom: '0.2rem' }}>
            <span className="font-label" style={{ fontSize: '0.62rem', color: '#88705c', fontWeight: '600', letterSpacing: '0.14em' }}>
              ✦ TAP TO ENLARGE CARD ✦
            </span>
          </div>
        </div>

        {/* Action Button Row */}
        <div className="btn-row">
          <button
            onClick={() => scrollToSection('event-section')}
            className="btn-gold"
          >
            <Calendar size={14} />
            <span>Event & Venue</span>
          </button>

          <button
            onClick={handleSendWishes}
            className="btn-secondary"
            title="Send Birthday Wishes via WhatsApp"
          >
            <MessageCircle size={14} color="#25D366" />
            <span>Send Wishes</span>
          </button>

          <a
            href="/images/invitation_card.jpg"
            download="Neomika-Birthday-Invitation.jpg"
            className="btn-secondary"
            title="Save Card"
          >
            <Download size={14} color="#586b4c" />
            <span>Save</span>
          </a>

          <button
            onClick={handleShare}
            className="btn-secondary"
            title="Share via WhatsApp"
          >
            <Share2 size={14} color="#bd756b" />
            <span>Share</span>
          </button>
        </div>

        {/* Scroll Prompt */}
        <div style={{ textAlign: 'center', marginTop: '1.75rem' }}>
          <button
            onClick={() => scrollToSection('countdown-section')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.25rem',
              color: '#8a7565'
            }}
          >
            <span className="font-label" style={{ fontSize: '0.62rem', letterSpacing: '0.18em' }}>SCROLL FOR DETAILS</span>
            <ChevronDown size={16} color="#b8924b" />
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {isZoomed && (
        <div className="modal-backdrop" onClick={() => setIsZoomed(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsZoomed(false)} aria-label="Close">
              <X size={18} />
            </button>

            <div style={{ background: '#ffffff', padding: '6px', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
              <img
                src="/images/invitation_card.jpg"
                alt="Fullscreen Invitation Card"
                style={{ maxHeight: '78vh', width: 'auto', display: 'block', borderRadius: '10px' }}
              />
            </div>

            <div style={{ marginTop: '0.85rem', display: 'flex', gap: '0.6rem' }}>
              <a
                href="/images/invitation_card.jpg"
                download="Neomika-Birthday-Invitation.jpg"
                className="btn-gold"
                style={{ padding: '0.5rem 1.2rem', fontSize: '0.65rem' }}
              >
                <Download size={13} />
                <span>Save to Photos</span>
              </a>
              <button
                onClick={() => setIsZoomed(false)}
                className="btn-secondary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.65rem' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
