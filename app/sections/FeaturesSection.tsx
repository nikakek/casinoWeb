'use client';

import React, { useState, useEffect } from 'react';

interface Card {
  id: number;
  title: string;
  description: string;
  backgroundImage?: string;
  path: string;
}

export default function CardSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cards: Card[] = [
    {
      id: 1,
      title: 'No KYC Casinos',
      description: 'Play instantly without lengthy verification',
      backgroundImage: '/assets/images/noKYC.png',
      path: `/no-kyc-casinos`,
    },
    {
      id: 2,
      title: 'No Deposit Needed',
      description: 'Start playing with free bonus funds',
      backgroundImage: '/assets/images/nodeposit.png',
      path: `/no-deposit`,
    },
    {
      id: 3,
      title: 'For Highrollers',
      description: 'Exclusive bonuses and VIP treatment for big players',
      backgroundImage: '/assets/images/highrollers.png',
      path: `/highrollers`,
    },
    {
      id: 4,
      title: 'No Crypto No Problem',
      description: 'Play with fiat currencies easily and securely',
      backgroundImage: '/assets/images/nocrypto.png',
      path: `/no-crypto`,
    },
  ];

  return (
    <>
      <style>{`
        @keyframes borderShine {
          0% {
            border-color: rgba(255, 215, 0, 0.3);
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
          }
          50% {
            border-color: rgba(255, 215, 0, 0.6);
            box-shadow: 0 0 30px rgba(255, 215, 0, 0.4);
          }
          100% {
            border-color: rgba(255, 215, 0, 0.3);
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
          }
        }

        .cards-container {
          position: relative;
          margin-top: -120px;
          z-index: 10;
          padding: 0 1rem;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
        }

        @media (min-width: 768px) {
          .cards-container {
            margin-top: -133px;
            padding: 0 2rem;
          }
        }

        .cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          padding: 0;
        }

        @media (min-width: 640px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .cards-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .card {
          position: relative;
          height: 450px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s ease;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0)' : 'translateY(20px)'};
          /* Shiny border that animates continuously */
          border: 1px solid rgba(255, 215, 0, 0.4);
          animation: borderShine 3s ease-in-out infinite;
        }

        .card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 215, 0, 0.8);
          box-shadow: 0 0 50px rgba(255, 215, 0, 0.6);
        }

        @media (max-width: 640px) {
          .card {
            height: 350px;
          }
        }

        .card-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.4s ease;
        }

        .card:hover .card-bg {
          transform: scale(1.05);
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.4) 10%
          );
          backdrop-filter: blur(0px);
          transition: backdrop-filter 0.5s ease;
        }

        .card:hover .card-overlay {
          backdrop-filter: blur(12px);
        }

        .card-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          height: 100%;
        }

        .card-glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(5px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.4s ease;
        }

        @media (max-width: 640px) {
          .card-glass {
            padding: 1rem;
          }
        }

        .card:hover .card-glass {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 215, 0, 0.4);
          box-shadow: 0 8px 32px rgba(255, 215, 0, 0.25);
        }

        .card-title {
          font-size: 1.3rem;
          font-weight: 900;
          color: white;
          margin-bottom: 0.5rem;
          margin-top: 0;
          letter-spacing: 0.05em;
          text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
          transition: all 0.3s ease;
        }

        @media (max-width: 640px) {
          .card-title {
            font-size: 1.1rem;
          }
        }

        .card:hover .card-title {
          color: #ffd700;
          text-shadow: 0 0 30px rgba(255, 215, 0, 0.6);
        }

        .card-description {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 300;
          letter-spacing: 0.05em;
          margin-bottom: 0;
        }

        @media (max-width: 640px) {
          .card-description {
            font-size: 0.85rem;
          }
        }
      `}</style>

      <section className="cards-container">
        <div className="cards-grid">
          {cards.map((card) => (
            <div
              key={card.id}
              className="card"
              style={{
                animationDelay: `${card.id * 0.2}s`,
              }}
              onClick={() => window.location.href = card.path}
            >
              {card.backgroundImage && (
                <div
                  className="card-bg"
                  style={{
                    backgroundImage: `url(${card.backgroundImage})`,
                  }}
                />
              )}
              <div className="card-overlay" />
              <div className="card-content">
                <div className="card-glass">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}