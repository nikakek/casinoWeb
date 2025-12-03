'use client';

import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
}

export default function Background() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 4,
    }));
    setParticles(generated);
  }, []);

  const GOLD = "#FFD700";
  const GOLD_GLOW = "#FFEA85";

  const styles: Record<'container' | 'particle', React.CSSProperties> = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -10,
      pointerEvents: 'none',
      background: 'linear-gradient(to bottom, #000000, #0c0c0c, #000000)',
      overflow: 'hidden',
    },
    particle: {
      position: 'absolute',
      width: '2px',
      height: '2px',
      background: GOLD,
      borderRadius: '50%',
      boxShadow: `0 0 10px ${GOLD_GLOW}`,
      opacity: 0.7,
    },
  };

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.7; }
          25% { transform: translateY(-20px) translateX(10px); opacity: 0.9; }
          50% { transform: translateY(-10px) translateX(-10px); opacity: 0.5; }
          75% { transform: translateY(-30px) translateX(5px); opacity: 0.8; }
        }
      `}</style>

      <div style={styles.container}>
        {particles.map((particle) => (
          <div
            key={particle.id}
            style={{
              ...styles.particle,
              left: particle.left,
              top: particle.top,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
