import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicController() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);

  const startMusicBox = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContext();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;

      const melody = [
        { note: 523.25, dur: 0.6, delay: 0 },    // C5
        { note: 659.25, dur: 0.6, delay: 600 },  // E5
        { note: 783.99, dur: 0.8, delay: 1200 }, // G5
        { note: 1046.50, dur: 1.0, delay: 2000 },// C6
        { note: 880.00, dur: 0.7, delay: 2800 }, // A5
        { note: 783.99, dur: 0.9, delay: 3500 }, // G5
        { note: 659.25, dur: 0.6, delay: 4400 }, // E5
        { note: 587.33, dur: 0.6, delay: 5000 }, // D5
        { note: 523.25, dur: 1.2, delay: 5600 }, // C5
        { note: 659.25, dur: 0.6, delay: 6800 }, // E5
        { note: 587.33, dur: 0.6, delay: 7400 }, // D5
        { note: 523.25, dur: 1.4, delay: 8000 }, // C5
      ];

      const totalLoopTime = 9600;

      const playTone = (freq, duration) => {
        if (!ctx || ctx.state === 'closed') return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2400, ctx.currentTime);

        const now = ctx.currentTime;
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.15, now + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.4);

        const overtone = ctx.createOscillator();
        const overtoneGain = ctx.createGain();
        overtone.type = 'sine';
        overtone.frequency.setValueAtTime(freq * 2.01, ctx.currentTime);
        overtoneGain.gain.setValueAtTime(0.001, now);
        overtoneGain.gain.linearRampToValueAtTime(0.05, now + 0.015);
        overtoneGain.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.6);

        osc.connect(gain);
        gain.connect(filter);
        overtone.connect(overtoneGain);
        overtoneGain.connect(filter);
        filter.connect(ctx.destination);

        osc.start(now);
        overtone.start(now);
        osc.stop(now + duration + 0.5);
        overtone.stop(now + duration + 0.5);
      };

      const loopMelody = () => {
        melody.forEach(item => {
          setTimeout(() => {
            if (audioCtxRef.current && isPlaying) {
              playTone(item.note, item.dur);
            }
          }, item.delay);
        });
      };

      loopMelody();
      timerRef.current = setInterval(loopMelody, totalLoopTime);

    } catch (e) {
      console.warn("Audio Context error:", e);
    }
  };

  const stopMusicBox = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'running') {
      audioCtxRef.current.suspend();
    }
  };

  const toggleMusic = () => {
    const next = !isPlaying;
    setIsPlaying(next);
    if (next) {
      startMusicBox();
    } else {
      stopMusicBox();
    }
  };

  useEffect(() => {
    return () => {
      stopMusicBox();
      if (audioCtxRef.current) {
        try { audioCtxRef.current.close(); } catch(e){}
      }
    };
  }, []);

  return (
    <button
      onClick={toggleMusic}
      className="music-pill"
      aria-label={isPlaying ? "Mute music" : "Play ambient melody"}
    >
      {isPlaying ? (
        <Volume2 size={13} color="#586b4c" />
      ) : (
        <VolumeX size={13} color="#8a7565" />
      )}
      <span>{isPlaying ? "MUSIC ON" : "MUSIC"}</span>
      {isPlaying && (
        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#586b4c' }}></span>
      )}
    </button>
  );
}
