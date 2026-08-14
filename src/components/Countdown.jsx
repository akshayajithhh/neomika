import React, { useState, useEffect } from 'react';
import { CalendarPlus, Bell } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Countdown() {
  const targetDate = new Date('2026-08-22T18:00:00+05:30').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isCelebration: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isCelebration: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const triggerCalendarConfetti = () => {
    confetti({
      particleCount: 30,
      spread: 55,
      origin: { y: 0.7 },
      colors: ['#b8924b', '#bd756b', '#586b4c']
    });
  };

  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Neomika's 1st Birthday Celebration 🌸");
    const details = encodeURIComponent("You're invited to celebrate baby Neomika's 1st Birthday with fun, food, and cake at Blanco Convention Centre, Kannanchery.");
    const location = encodeURIComponent("Blanco Convention Centre, Kannanchery, Kozhikode");
    const dates = "20260822T123000Z/20260822T163000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  const downloadIcs = () => {
    triggerCalendarConfetti();
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Neomika Birthday//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:Neomika's 1st Birthday Celebration 🌸
DESCRIPTION:You're invited to celebrate baby Neomika's 1st Birthday with fun, food, and cake!
LOCATION:Blanco Convention Centre, Kannanchery, Kozhikode
DTSTART:20260822T123000Z
DTEND:20260822T163000Z
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-PT2H
ACTION:DISPLAY
DESCRIPTION:Reminder: Neomika's Birthday Celebration today at 6:00 PM!
END:VALARM
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Neomika-Birthday-Invitation.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const units = [
    { label: 'DAYS', val: timeLeft.days },
    { label: 'HOURS', val: timeLeft.hours },
    { label: 'MINS', val: timeLeft.minutes },
    { label: 'SECS', val: timeLeft.seconds },
  ];

  return (
    <section id="countdown-section" className="scroll-reveal" style={{ padding: '0.75rem 0' }}>
      <div className="content-container">
        
        <div className="luxury-card" style={{ textAlign: 'center' }}>
          
          <div style={{ marginBottom: '1rem' }}>
            <span className="font-label" style={{ fontSize: '0.65rem', fontWeight: '600', color: '#b8924b', letterSpacing: '0.2em', display: 'block', marginBottom: '0.25rem' }}>
              SAVE THE DATE
            </span>
            <h2 className="font-heading" style={{ fontSize: '1.7rem', fontWeight: '500', color: '#2B1D14', margin: 0 }}>
              The Celebration Begins In
            </h2>
          </div>

          {/* Countdown Grid */}
          <div className="countdown-grid">
            {units.map((u) => (
              <div key={u.label} className="countdown-box">
                <div className="countdown-num">
                  {String(u.val).padStart(2, '0')}
                </div>
                <div className="countdown-label">
                  {u.label}
                </div>
              </div>
            ))}
          </div>

          {/* Calendar Actions */}
          <div style={{
            marginTop: '1.25rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(210, 185, 155, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap'
          }}>
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={triggerCalendarConfetti}
              className="btn-secondary"
              style={{ fontSize: '0.68rem', padding: '0.55rem 1rem' }}
            >
              <CalendarPlus size={14} color="#586b4c" />
              <span>Google Calendar</span>
            </a>

            <button
              onClick={downloadIcs}
              className="btn-secondary"
              style={{ fontSize: '0.68rem', padding: '0.55rem 1rem' }}
            >
              <Bell size={14} color="#bd756b" />
              <span>Apple / iCal</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
