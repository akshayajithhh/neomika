import React, { useState } from 'react';
import { Calendar, MapPin, Navigation, ExternalLink, Map } from 'lucide-react';

export default function EventDetails() {
  const [showMap, setShowMap] = useState(false);
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Blanco+Convention+Centre+Kannanchery";

  return (
    <section id="event-section" className="scroll-reveal" style={{ padding: '0.75rem 0' }}>
      <div className="content-container">
        
        <div className="luxury-card">
          
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <span className="font-label" style={{ fontSize: '0.65rem', fontWeight: '600', color: '#b8924b', letterSpacing: '0.2em', display: 'block', marginBottom: '0.25rem' }}>
              EVENT & VENUE
            </span>
            <h2 className="font-heading" style={{ fontSize: '1.65rem', fontWeight: '500', color: '#2B1D14', margin: 0 }}>
              Celebration Details
            </h2>
          </div>

          {/* Date & Venue Hero Grid */}
          <div className="event-info-grid">
            
            <div className="event-info-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#b8924b', marginBottom: '0.35rem' }}>
                <Calendar size={15} />
                <span className="font-label" style={{ fontSize: '0.62rem', fontWeight: '600' }}>DATE & TIME</span>
              </div>
              <div className="font-heading" style={{ fontSize: '1.1rem', fontWeight: '600', color: '#2B1D14' }}>
                22nd August 2026
              </div>
              <div style={{ fontSize: '0.8rem', color: '#6e5848', marginTop: '0.15rem' }}>
                Saturday • 6:00 PM Onwards
              </div>
            </div>

            <div className="event-info-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#586b4c', marginBottom: '0.35rem' }}>
                <MapPin size={15} />
                <span className="font-label" style={{ fontSize: '0.62rem', fontWeight: '600' }}>VENUE</span>
              </div>
              <div className="font-heading" style={{ fontSize: '1.1rem', fontWeight: '600', color: '#2B1D14' }}>
                Blanco Convention
              </div>
              <div style={{ fontSize: '0.8rem', color: '#6e5848', marginTop: '0.15rem' }}>
                Kannanchery, Kozhikode
              </div>
            </div>

          </div>

          {/* Direct Venue Navigation Actions */}
          <div style={{
            paddingTop: '0.75rem',
            borderTop: '1px solid rgba(210, 185, 155, 0.35)',
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
              style={{ fontSize: '0.68rem', padding: '0.6rem 1.2rem' }}
            >
              <Navigation size={14} />
              <span>View on Google Maps</span>
              <ExternalLink size={12} style={{ opacity: 0.8 }} />
            </a>

            <button
              onClick={() => setShowMap(!showMap)}
              className="btn-secondary"
              style={{ fontSize: '0.68rem', padding: '0.6rem 1rem' }}
            >
              <Map size={14} color="#586b4c" />
              <span>{showMap ? "Hide Map" : "Preview Map"}</span>
            </button>
          </div>

          {/* Map Preview Frame */}
          {showMap && (
            <div style={{ marginTop: '1rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(190, 160, 130, 0.35)' }}>
              <iframe
                title="Blanco Convention Centre Map"
                src="https://maps.google.com/maps?q=Blanco%20Convention%20Centre%20Kannanchery&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
