'use client';

import React, { useState, useEffect } from 'react';
import { Linkedin, ArrowUp } from 'lucide-react';
import Image from 'next/image';

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
        <footer className="relative from-gray-950 via-black to-gray-950 border-t border-gray-800">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&display=swap');
                .font-cinzel { font-family: 'Cinzel', serif; }
            `}</style>

            {/* Scroll to Top */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl shadow-yellow-500/30 hover:scale-110 transition-all duration-300 group"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-7 h-7 text-black group-hover:-translate-y-1 transition-transform" />
                </button>
            )}

            <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16">
                {/* 3 Equal Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    {/* LEFT - Warnings */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="w-full max-w-md space-y-5 text-gray-300 text-[11px] leading-relaxed">
                            {/* Yellow Box */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-stretch gap-4 bg-yellow-950/30 border border-yellow-700/40 rounded-lg p-4">
                                <Image
                                    src="/assets/icons/footerGirl.png"
                                    alt="Casino character"
                                    width={120}
                                    height={150}
                                    className="w-auto h-32 object-contain flex-shrink-0 self-center"
                                />
                                <div className="flex flex-col justify-center gap-2">
                                    <p className="uppercase tracking-wider">
                                        <span className="font-bold text-yellow-300">CRYPTOGAMBLIN.COM</span> reviews and analyzes crypto casinos to bring you the latest offers, exclusive bonuses, clear guides, and to choose the environment that suits you best.
                                    </p>
                                    <p className="uppercase tracking-wider text-yellow-200/80">
                                        We also offer links and may earn a commission if you sign up — at no extra cost to you.
                                    </p>
                                </div>
                            </div>

                            {/* Red Boxes */}
                            <div className="flex items-center gap-3 bg-red-950/20 border border-red-900/30 rounded-lg p-3">
                                <Image src="/assets/icons/plus18.png" alt="18+" width={48} height={48} className="w-12 h-12" unoptimized />
                                <p className="uppercase tracking-wider">
                                    <span className="font-bold text-red-400">YOU MUST BE 18+ (OR 21+ IN SOME REGIONS) TO GAMBLE.</span> Participating in any form of online gambling, please ensure that it is legal and regulated in your country or region.
                                </p>
                            </div>
                            <div className="flex items-center gap-3 bg-red-950/20 border border-red-900/30 rounded-lg p-3">
                                <Image src="/assets/icons/plus21.png" alt="21+" width={48} height={48} className="w-12 h-12" unoptimized />
                                <p className="uppercase tracking-wider">
                                    <span className="font-bold text-red-400">ALWAYS FOLLOW LOCAL LAWS AND GUIDELINES,</span> and remember that gambling should only be done for entertainment, never as a source of income.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* MIDDLE - Developer (same width) */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-md">
                            <div className="flex items-center relative gap-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/40 rounded-lg p-6">
                                <div className="flex flex-col gap-4 flex-1 text-center sm:text-left">
                                    <p className="text-gray-300 text-[11px] uppercase tracking-wider w-fit">
                                        <span className="font-bold text-yellow-300">Developed by: Keke</span>
                                    </p>
                                    <div className="flex gap-3 justify-center sm:justify-start w-fit">
                                        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer"
                                            className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg flex items-center justify-center shadow-lg transition hover:scale-110">
                                            <Linkedin className="w-5 h-5 text-white" />
                                        </a>
                                        <a href="https://discord.gg/your-invite" target="_blank" rel="noopener noreferrer"
                                            className="w-11 h-11 bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 rounded-lg flex items-center justify-center shadow-lg transition hover:scale-110">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <Image
                                    src="/assets/icons/developer.png"
                                    width={110}
                                    height={110}
                                    alt="Developer"
                                    className="w-30 max-lg:w-26 object-cover flex-shrink-0 absolute right-0 bottom-0"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT - Support Logos (same width + dark greenish box) */}
                    <div className="flex flex-col items-center lg:items-end">
                        <div className="w-full max-w-md bg-gradient-to-br from-green-950/30 to-green-900/30 border border-green-800/40 rounded-lg p-6">
                            <div className="flex flex-col items-center gap-6">
                                <Image
                                    src="/assets/icons/betBlocker.png"
                                    alt="BetBlocker"
                                    width={90}
                                    height={34}
                                    className="h-7 w-auto opacity-70 hover:opacity-100 transition"
                                />

                                <div className="flex flex-wrap justify-center gap-1">
                                    <Image src="/assets/icons/gordonMoody.png" alt="Gordon Moody" width={120} height={48} className="h-9 w-auto opacity-70 hover:opacity-100 transition" />
                                    <Image src="/assets/icons/gamStop.png" alt="GamStop" width={120} height={42} className="h-9 w-auto opacity-70 hover:opacity-100 transition" />
                                </div>

                                <div className="flex flex-wrap justify-center lg:justify-center gap-5">
                                    <Image src="/assets/icons/colored.png" alt="Support" width={120} height={48} className="h-13 w-auto opacity-70 hover:opacity-100 transition" />
                                    <Image src="/assets/icons/gambleAware.png" alt="GambleAware" width={210} height={40} className="h-13 w-auto opacity-70 hover:opacity-100 transition" />
                                    <Image src="/assets/icons/gamblersAnonimous.png" alt="Gamblers Anonymous" width={120} height={48} className="h-13 w-auto opacity-70 hover:opacity-100 transition" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-sm">
                        <p className="text-gray-500">© {new Date().getFullYear()} CryptoGamblin. All rights reserved.</p>
                        <div className="flex gap-8">
                            <a href="#" className="text-gray-400 hover:text-yellow-400 transition font-medium">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-yellow-400 transition font-medium">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;