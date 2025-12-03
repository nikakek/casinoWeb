'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isBettingOpen, setIsBettingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (current / height) * 100;
      setScrollProgress(progress);

      if (current < 10) setIsVisible(true);
      else if (current > lastScrollY) setIsVisible(false);
      else setIsVisible(true);

      setLastScrollY(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (sectionId === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    
    setIsMenuOpen(false);
    setIsBettingOpen(false);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Crypto Casinos', href: '#crypto-casinos' },
    { name: 'Crypto Poker', href: '#crypto-poker' },
    { name: 'No KYC Casinos', href: '#no-kyc-casinos' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Buy Crypto', href: '#buy-crypto' },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Cinzel:wght@400;500;600;700;800&display=swap');

        body {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          scroll-behavior: smooth;
        }

        .font-cinzel {
          font-family: 'Cinzel', serif;
        }

        .gold-text {
          color: #FFD700;
          text-shadow: 0 0 15px rgba(255, 215, 0, 0.6),
            0 0 30px rgba(255, 215, 0, 0.4);
        }

        @keyframes shimmer-logo {
          0% { background-position: -100% center; }
          100% { background-position: 200% center; }
        }

        .logo-shimmer {
          background: linear-gradient(
            90deg,
            #FFD700 0%,
            #FFEA85 50%,
            #FFD700 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer-logo 4s linear infinite;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
      >
        {/* Scroll Progress */}
        <div
          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-500 to-transparent transition-all ease-in-out duration-400"
          style={{ width: `${scrollProgress}%` }}
        >
          <div className="absolute inset-0 shadow-lg shadow-yellow-500/50"></div>
        </div>

        <div className="relative backdrop-blur-md bg-black/30 border-b border-yellow-600/20">
          <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4 lg:gap-6 h-16 sm:h-18 md:h-20">
              {/* Logo */}
              <a 
                href="#home" 
                onClick={(e) => scrollToSection(e, '#home')}
                className="flex-shrink-0 cursor-pointer"
              >
                <div className="relative group">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-cinzel logo-shimmer tracking-wider uppercase">
                    CryptoWins
                  </h1>
                </div>
              </a>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-4">
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, '#home')}
                  className="relative text-xs xl:text-sm 2xl:text-base font-semibold text-gray-300 transition-all duration-300 ease-out group whitespace-nowrap px-2 xl:px-3 2xl:px-4 py-2 cursor-pointer hover:text-yellow-400"
                >
                  <span className="relative z-10">Home</span>
                </a>

                <a
                  href="#crypto-casinos"
                  onClick={(e) => scrollToSection(e, '#crypto-casinos')}
                  className="relative text-xs xl:text-sm 2xl:text-base font-semibold text-gray-300 transition-all duration-300 ease-out group whitespace-nowrap px-2 xl:px-3 2xl:px-4 py-2 cursor-pointer hover:text-yellow-400"
                >
                  <span className="relative z-10">Crypto Casinos</span>
                </a>

                {/* Crypto Betting Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsBettingOpen(!isBettingOpen)}
                    className="relative text-xs xl:text-sm 2xl:text-base font-semibold text-gray-300 transition-all duration-300 ease-out group whitespace-nowrap flex items-center gap-1 px-2 xl:px-3 2xl:px-4 py-2 hover:text-yellow-400"
                  >
                    <span className="relative z-10">Crypto Betting</span>
                    <svg
                      className={`relative z-10 w-3 h-3 xl:w-3.5 xl:h-3.5 2xl:w-4 2xl:h-4 transition-all duration-300 ease-out ${isBettingOpen ? 'rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full right-0 mt-3 w-48 xl:w-52 transition-all duration-300 ease-out ${isBettingOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}
                  >
                    <div className="backdrop-blur-xl bg-black/80 border border-yellow-600/40 rounded-xl shadow-2xl shadow-yellow-500/20 overflow-hidden">
                      <a
                        href="#sport-betting"
                        onClick={(e) => scrollToSection(e, '#sport-betting')}
                        className="block px-4 xl:px-5 py-3.5 xl:py-4 text-sm font-semibold text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors duration-300"
                      >
                        🏆 Sport Betting
                      </a>
                      <a
                        href="#esport-betting"
                        onClick={(e) => scrollToSection(e, '#esport-betting')}
                        className="block px-4 xl:px-5 py-3.5 xl:py-4 text-sm font-semibold text-gray-300 hover:text-yellow-400 cursor-pointer transition-colors duration-300"
                      >
                        🎮 Esport Betting
                      </a>
                    </div>
                  </div>
                </div>

                <a
                  href="#crypto-poker"
                  onClick={(e) => scrollToSection(e, '#crypto-poker')}
                  className="relative text-xs xl:text-sm 2xl:text-base font-semibold text-gray-300 transition-all duration-300 ease-out group whitespace-nowrap px-2 xl:px-3 2xl:px-4 py-2 cursor-pointer hover:text-yellow-400"
                >
                  <span className="relative z-10">Crypto Poker</span>
                </a>

                <a
                  href="#no-kyc-casinos"
                  onClick={(e) => scrollToSection(e, '#no-kyc-casinos')}
                  className="relative text-xs xl:text-sm 2xl:text-base font-semibold text-gray-300 transition-all duration-300 ease-out group whitespace-nowrap px-2 xl:px-3 2xl:px-4 py-2 cursor-pointer hover:text-yellow-400"
                >
                  <span className="relative z-10">No KYC Casinos</span>
                </a>

                <a
                  href="#blogs"
                  onClick={(e) => scrollToSection(e, '#blogs')}
                  className="relative text-xs xl:text-sm 2xl:text-base font-semibold text-gray-300 transition-all duration-300 ease-out group whitespace-nowrap px-2 xl:px-3 2xl:px-4 py-2 cursor-pointer hover:text-yellow-400"
                >
                  <span className="relative z-10">Blogs</span>
                </a>

                <a
                  href="#buy-crypto"
                  onClick={(e) => scrollToSection(e, '#buy-crypto')}
                  className="relative text-xs xl:text-sm 2xl:text-base font-semibold text-gray-300 transition-all duration-300 ease-out group whitespace-nowrap px-2 xl:px-3 2xl:px-4 py-2 cursor-pointer hover:text-yellow-400"
                >
                  <span className="relative z-10">Buy Crypto</span>
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative p-2 sm:p-3 rounded-lg bg-black/50 backdrop-blur-sm border border-yellow-600/30 hover:border-yellow-500/50 transition-all duration-400 ease-in-out group flex-shrink-0"
              >
                <svg
                  className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-400 ease-in-out"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${isMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <nav className="px-3 sm:px-4 py-4 sm:py-6 space-y-2 backdrop-blur-xl bg-black/50 border-t border-yellow-600/20">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block px-4 sm:px-5 py-3 sm:py-3.5 text-sm font-medium text-gray-300 hover:text-yellow-500 rounded-lg transition-all duration-400 ease-in-out hover:bg-yellow-500/10 border border-transparent hover:border-yellow-600/30 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Betting Section */}
              <div className="border-t border-yellow-600/20 pt-2 mt-2">
                <div className="px-4 sm:px-5 py-2 text-xs font-semibold text-yellow-500 uppercase tracking-wider">
                  Crypto Betting
                </div>
                <a
                  href="#sport-betting"
                  onClick={(e) => scrollToSection(e, '#sport-betting')}
                  className="block px-4 sm:px-5 py-3 sm:py-3.5 text-sm font-medium text-gray-300 hover:text-yellow-500 rounded-lg transition-all duration-400 ease-in-out hover:bg-yellow-500/10 border border-transparent hover:border-yellow-600/30 cursor-pointer"
                >
                  Sport Betting
                </a>
                <a
                  href="#esport-betting"
                  onClick={(e) => scrollToSection(e, '#esport-betting')}
                  className="block px-4 sm:px-5 py-3 sm:py-3.5 text-sm font-medium text-gray-300 hover:text-yellow-500 rounded-lg transition-all duration-400 ease-in-out hover:bg-yellow-500/10 border border-transparent hover:border-yellow-600/30 cursor-pointer"
                >
                  Esport Betting
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;