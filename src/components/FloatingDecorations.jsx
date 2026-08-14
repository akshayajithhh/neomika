import React from 'react';

export default function FloatingDecorations() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }} aria-hidden="true">
      {/* Soft Ambient Light Glows */}
      <div style={{
        position: 'absolute',
        top: '8%',
        left: '10%',
        width: '18rem',
        height: '18rem',
        borderRadius: '50%',
        background: 'rgba(243, 231, 211, 0.4)',
        filter: 'blur(50px)'
      }}></div>
      
      <div style={{
        position: 'absolute',
        top: '45%',
        right: '5%',
        width: '20rem',
        height: '20rem',
        borderRadius: '50%',
        background: 'rgba(232, 238, 224, 0.35)',
        filter: 'blur(50px)'
      }}></div>

      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '15%',
        width: '18rem',
        height: '18rem',
        borderRadius: '50%',
        background: 'rgba(247, 235, 230, 0.4)',
        filter: 'blur(50px)'
      }}></div>
    </div>
  );
}
