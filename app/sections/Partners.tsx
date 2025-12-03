'use client';

import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Github, Twitch, MessageCircle, Send } from 'lucide-react';

const PartnersSection = () => {
  // Diamond pattern: 1-2-3-2-1
  const socialLinks = [
    // Row 1 (1 item)
    [
      { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:bg-blue-400' }
    ],
    // Row 2 (2 items)
    [
      { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:bg-blue-600' },
      { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:bg-pink-600' }
    ],
    // Row 3 (3 items)
    [
      { name: 'Youtube', icon: Youtube, url: '#', color: 'hover:bg-red-600' },
      { name: 'Discord', icon: MessageCircle, url: '#', color: 'hover:bg-indigo-600' },
      { name: 'Telegram', icon: Send, url: '#', color: 'hover:bg-blue-500' }
    ],
    // Row 4 (2 items)
    [
      { name: 'Twitch', icon: Twitch, url: '#', color: 'hover:bg-purple-600' },
      { name: 'LinkedIn', icon: Linkedin, url: '#', color: 'hover:bg-blue-700' }
    ],
    // Row 5 (1 item)
    [
      { name: 'Github', icon: Github, url: '#', color: 'hover:bg-gray-700' }
    ]
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 from-black to-gray-900">
      
      {/* Section Title */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap');

          .font-cinzel {
            font-family: 'Cinzel', serif;
          }

          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
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

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          .social-circle {
            animation: float 3s ease-in-out infinite;
          }

          .social-circle:nth-child(2) {
            animation-delay: 0.3s;
          }

          .social-circle:nth-child(3) {
            animation-delay: 0.6s;
          }
        `}</style>

        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-cinzel font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 gold-shimmer uppercase tracking-tight">
            Our Partners
          </h2>
          
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent to-yellow-500"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
            <div className="h-px w-24 md:w-32 bg-gradient-to-l from-transparent to-yellow-500"></div>
          </div>

          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Connect with us on social media
          </p>
        </div>

        {/* Diamond Grid */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
          {socialLinks.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className="flex items-center justify-center gap-6 sm:gap-8 md:gap-12"
            >
              {row.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-circle group relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full  bg-gradient-to-r border-2 border-yellow-500/30 flex items-center justify-center transition-all duration-300 ${social.color} hover:border-yellow-500 hover:scale-110 hover:shadow-2xl hover:shadow-yellow-500/50`}
                    style={{ animationDelay: `${rowIndex * 0.2 + index * 0.1}s` }}
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-all duration-300"></div>
                    
                    {/* Icon */}
                    <Icon className="w-7 h-7 sm:w-9 sm:h-9 md:w-11 md:h-11 text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10" />
                    
                    {/* Tooltip */}
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;