'use client';

import React from 'react';
import Background from '../components/Background';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 overflow-hidden">

      {/* Floating particles */}
      <Background />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">
        {/* Hero text styles */}
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Cinzel:wght@400;500;600;700;800;900&display=swap');

          .font-cinzel {
            font-family: 'Cinzel', serif;
          }

          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }

          @keyframes pulse-glow {
            0%, 100% {
              text-shadow: 0 0 20px rgba(255, 215, 0, 0.5),
                           0 0 40px rgba(255, 215, 0, 0.3),
                           0 0 60px rgba(255, 215, 0, 0.2);
            }
            50% {
              text-shadow: 0 0 30px rgba(255, 215, 0, 0.8),
                           0 0 60px rgba(255, 215, 0, 0.5),
                           0 0 90px rgba(255, 215, 0, 0.3);
            }
          }

          .gold-shimmer {
            background: linear-gradient(
              90deg,
              #FFD700 0%,
              #FFEA85 25%,
              #FFF8DC 50%,
              #FFEA85 75%,
              #FFD700 100%
            );
            background-size: 200% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: shimmer 3s linear infinite;
          }

          .gold-glow-text {
            animation: pulse-glow 3s ease-in-out infinite;
          }

          @media (max-width: 640px) {
            @keyframes pulse-glow {
              0%, 100% {
                text-shadow: 0 0 10px rgba(255, 215, 0, 0.5),
                             0 0 20px rgba(255, 215, 0, 0.3),
                             0 0 30px rgba(255, 215, 0, 0.2);
              }
              50% {
                text-shadow: 0 0 15px rgba(255, 215, 0, 0.8),
                             0 0 30px rgba(255, 215, 0, 0.5),
                             0 0 45px rgba(255, 215, 0, 0.3);
              }
            }
          }
        `}</style>

        {/* Main Title */}
        <h1 className="font-cinzel font-black text-[clamp(2.25rem,8vw,9rem)] sm:text-7xl md:text-8xl lg:text-9xl mb-4 sm:mb-6 gold-shimmer gold-glow-text uppercase tracking-tight px-4 leading-tight">
          CryptoWins
        </h1>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
          <div className="h-px w-16 sm:w-24 md:w-32 bg-gradient-to-r from-transparent to-yellow-500"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50 flex-shrink-0"></div>
          <div className="h-px w-16 sm:w-24 md:w-32 bg-gradient-to-l from-transparent to-yellow-500"></div>
        </div>

        {/* Subtitle */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-wide max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
          Exclusive Crypto Casino Deals – Choose a Bonus & Start Playing Instantly
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
