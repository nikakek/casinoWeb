'use client';

import React, { useState, useEffect } from 'react';
import { Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative from-gray-900 to-black border-t border-yellow-500/20">
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap');

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
      `}</style>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/50 hover:scale-110 hover:shadow-yellow-500/70 transition-all duration-300 group"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-6 h-6 sm:w-7 sm:h-7 text-black group-hover:text-gray-900 transition-colors" />
                </button>
            )}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    {/* Logo Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/50">
                                <span className="font-cinzel font-bold text-2xl text-black">C</span>
                            </div>
                            <h3 className="font-cinzel font-bold text-2xl gold-shimmer">
                                CASINO
                            </h3>
                        </div>
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            Premium gaming experience
                        </p>
                    </div>

                    {/* Responsible Gaming Warning */}
                    <div className="flex flex-col items-center justify-center px-4">
                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 max-w-md">
                            <div className="flex items-start gap-2">
                                <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-black text-xs font-bold">!</span>
                                </div>
                                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                                    Outcomes from case openings are completely random. Never spend more than you can safely afford. If gambling becomes a problem, visit support organizations like{' '}
                                    <a
                                        href="https://www.gambleaware.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-yellow-500 hover:text-yellow-400 underline transition-colors"
                                    >
                                        gambleaware.org
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Developer Section */}
                    <div className="flex flex-col items-center md:items-end">
                        <p className="text-gray-400 text-sm mb-3">Developed by</p>
                        <a
                            href="https://www.linkedin.com/in/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 border border-yellow-500/20 rounded-lg px-5 py-3 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
                        >
                            <div className="flex items-center gap-2">
                                <Linkedin className="w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors" />
                                <span className="text-gray-200 font-medium group-hover:text-white transition-colors">
                                    Your Name
                                </span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-yellow-500/20 pt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Casino. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                                Terms of Service
                            </a>
                            <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;