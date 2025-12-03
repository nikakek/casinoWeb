'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CryptoCasinoCardProps {
    rank: number;
    name: string;
    logo: string;
    bonus: string;
    coins: string[];
    coinsCount: number;
    openedIn?: string;
    siteUrl: string;
    reviewUrl: string;
    expertsChoice?: boolean;
}

export default function CryptoCasinoCard({
    rank,
    name,
    logo,
    bonus,
    coins,
    coinsCount,
    openedIn,
    siteUrl,
    reviewUrl,
    expertsChoice = false,
}: CryptoCasinoCardProps) {
    const isGold = rank === 1;
    const isSilver = rank === 2;
    const isBronze = rank === 3;

    return (
        <div className="relative">
            {/* Expert's Choice Badge - Smaller */}
            {expertsChoice && (
                <div className="absolute -top-4 left-6 z-20">
                    <div className="relative">
                        <div className="absolute inset-0 bg-yellow-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                        <div
                            className="relative px-4 py-1.5 rounded-full font-bold text-black text-xs tracking-wider shadow-xl flex items-center gap-1.5 whitespace-nowrap border border-yellow-300"
                            style={{
                                background: 'linear-gradient(135deg, #F5D260, #FFEFA8, #F5D260)',
                            }}
                        >
                            <svg className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '3s' }} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                            </svg>
                            EXPERT'S CHOICE
                        </div>
                    </div>
                </div>
            )}

            <div className="relative group">
                {/* Animated Background Glow - Reduced */}
                <div
                    className={`absolute -inset-0.5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 ${
                        isGold ? 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400' :
                        isSilver ? 'bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400' :
                        isBronze ? 'bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600' :
                        'bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700'
                    }`}
                    style={{
                        backgroundSize: '200% 100%',
                        animation: 'shine 3s linear infinite'
                    }}
                />

                {/* Main Card - More Compact */}
                <div
                    className="relative rounded-2xl overflow-hidden backdrop-blur-xl"
                    style={{
                        background: isGold || expertsChoice
                            ? 'linear-gradient(135deg, rgba(245,210,96,0.15) 0%, rgba(10,11,15,0.95) 50%, rgba(245,210,96,0.15) 100%)'
                            : isSilver
                                ? 'linear-gradient(135deg, rgba(211,215,223,0.15) 0%, rgba(10,11,15,0.95) 50%, rgba(211,215,223,0.15) 100%)'
                                : isBronze
                                    ? 'linear-gradient(135deg, rgba(196,109,45,0.15) 0%, rgba(10,11,15,0.95) 50%, rgba(196,109,45,0.15) 100%)'
                                    : 'linear-gradient(135deg, rgba(26,27,31,0.8) 0%, rgba(10,11,15,0.95) 100%)',
                        border: '1px solid',
                        borderImageSlice: 1,
                        borderImageSource: isGold
                            ? 'linear-gradient(135deg, #F5D260, #FCEEA7, #F5D260)'
                            : isSilver
                                ? 'linear-gradient(135deg, #D3D7DF, #F2F3F5, #D3D7DF)'
                                : isBronze
                                    ? 'linear-gradient(135deg, #C46D2D, #E08A45, #C46D2D)'
                                    : 'linear-gradient(135deg, #1a1b1f, #26292e, #1a1b1f)',
                    }}
                >
                    {/* Decorative corner accents - Smaller */}
                    <div className="absolute top-0 left-0 w-20 h-20 opacity-20">
                        <div className={`absolute top-2 left-2 w-10 h-0.5 ${isGold ? 'bg-yellow-400' : isSilver ? 'bg-gray-300' : isBronze ? 'bg-amber-500' : 'bg-gray-600'}`}></div>
                        <div className={`absolute top-2 left-2 w-0.5 h-10 ${isGold ? 'bg-yellow-400' : isSilver ? 'bg-gray-300' : isBronze ? 'bg-amber-500' : 'bg-gray-600'}`}></div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-20 h-20 opacity-20">
                        <div className={`absolute bottom-2 right-2 w-10 h-0.5 ${isGold ? 'bg-yellow-400' : isSilver ? 'bg-gray-300' : isBronze ? 'bg-amber-500' : 'bg-gray-600'}`}></div>
                        <div className={`absolute bottom-2 right-2 w-0.5 h-10 ${isGold ? 'bg-yellow-400' : isSilver ? 'bg-gray-300' : isBronze ? 'bg-amber-500' : 'bg-gray-600'}`}></div>
                    </div>

                    <div className="relative flex flex-col md:flex-row items-center w-full h-full p-4 md:p-5 gap-4 md:gap-6">
                        {/* Rank Badge - Smaller */}
                        <div className="absolute top-3 left-3 z-10">
                            <div
                                className={`relative flex items-center justify-center w-12 h-12 rounded-xl font-black text-xl transition-all duration-300 group-hover:scale-110 ${
                                    isGold ? 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-black shadow-xl shadow-yellow-500/50' :
                                    isSilver ? 'bg-gradient-to-br from-gray-300 via-gray-200 to-gray-400 text-gray-900 shadow-xl shadow-gray-400/50' :
                                    isBronze ? 'bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 text-white shadow-xl shadow-amber-600/50' :
                                    'bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-gray-300 shadow-lg'
                                }`}
                            >
                                <span className="relative z-10">#{rank}</span>
                                {(isGold || isSilver || isBronze) && (
                                    <div className="absolute inset-0 rounded-xl animate-pulse opacity-50 blur-md"
                                        style={{
                                            background: isGold ? '#F5D260' : isSilver ? '#D3D7DF' : '#C46D2D'
                                        }}
                                    />
                                )}
                            </div>
                        </div>

                        {/* Logo - Smaller */}
                        <div className="shrink-0 relative">
                            <div className={`absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-500 ${
                                isGold ? 'bg-yellow-400' : isSilver ? 'bg-gray-300' : isBronze ? 'bg-amber-500' : 'bg-gray-700'
                            }`}></div>
                            <div className="relative w-24 h-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl border border-gray-700 overflow-hidden shadow-xl transform transition-transform duration-500 group-hover:scale-105 group-hover:border-yellow-500/50">
                                <Image
                                    src={logo}
                                    alt={name}
                                    fill
                                    unoptimized
                                    className="object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = `https://via.placeholder.com/96/0f0f0f/FFD700?text=${name.charAt(0)}`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                            </div>
                        </div>

                        {/* Casino Info - More Compact */}
                        <div className="flex-1 text-center md:text-left space-y-2">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-white leading-tight group-hover:from-yellow-200 group-hover:via-white group-hover:to-yellow-200 transition-all duration-500">
                                {name}
                            </h3>

                            {/* Bonus - Smaller */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 via-yellow-400/20 to-yellow-500/20 rounded-xl border border-yellow-500/30 backdrop-blur-sm">
                                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                </svg>
                                <p className="text-base md:text-lg font-bold text-yellow-400 drop-shadow-lg">
                                    {bonus}
                                </p>
                            </div>

                            {/* Crypto coins - Smaller */}
                            <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start pt-1">
                                <span className="text-gray-400 font-semibold text-xs tracking-wider uppercase">Accepts:</span>
                                <div className="flex items-center gap-1.5">
                                    {coins.slice(0, 4).map((coin, idx) => (
                                        <div
                                            key={coin}
                                            className="relative w-8 h-8 bg-gradient-to-br from-yellow-500/20 to-gray-900 rounded-lg flex items-center justify-center text-xs font-bold text-yellow-400 border border-yellow-500/30 shadow-md hover:scale-110 transition-transform duration-300 hover:shadow-yellow-500/50"
                                            style={{
                                                animation: `float ${3 + idx * 0.5}s ease-in-out infinite`
                                            }}
                                        >
                                            {coin}
                                        </div>
                                    ))}
                                    {coinsCount > 5 && (
                                        <div className="flex items-center gap-1 px-2 py-0.5 bg-gray-800/50 rounded-full border border-gray-700">
                                            <span className="text-gray-400 font-medium text-xs">+{coinsCount - 5}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {openedIn && (
                                <div className="flex items-center gap-1.5 text-gray-500 text-xs justify-center md:justify-start">
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                    <span>Est. {openedIn} • Licensed</span>
                                </div>
                            )}
                        </div>

                        {/* Buttons - Smaller */}
                        <div className="flex flex-col gap-2 w-full md:w-auto">
                            <Link href={siteUrl} target="_blank" rel="noopener noreferrer">
                                <button
                                    className="relative w-full font-black text-black text-base py-3 px-8 rounded-xl overflow-hidden group/btn transition-all duration-300 hover:scale-105"
                                    style={{
                                        background: 'linear-gradient(135deg, #F5D260, #FFEFA8, #F5D260)',
                                    }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                                        style={{
                                            animation: 'slideRight 2s ease-in-out infinite'
                                        }}
                                    />
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        PLAY NOW
                                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </span>
                                </button>
                            </Link>

                            <Link href={reviewUrl} className="text-center group/link">
                                <span className="text-gray-400 group-hover/link:text-yellow-400 font-medium text-xs tracking-wider border-b border-transparent group-hover/link:border-yellow-400 transition-all pb-0.5 inline-flex items-center gap-1.5">
                                    Read Review
                                    <svg className="w-3 h-3 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes shine {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-3px); }
                }
                
                @keyframes slideRight {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </div>
    );
}