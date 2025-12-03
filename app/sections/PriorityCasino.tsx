'use client'
import React from 'react';
import Image from 'next/image';

const PriorityCasinoSection = () => {
  const tiers = [
    {
      title: '$50K',
      subtitle: 'MEGA JACKPOT',
      tag: 'DAILY CHANCE',
      iconImage: '/assets/images/priorityCasino/leftCard.png',
      features: [
        'Auto-entry with code CRYPTOWINS',
        'Min. $200 daily volume required',
        'Winner selected every 24 hours',
        'Instant payout to your wallet'
      ]
    },
    {
      title: '15%',
      subtitle: 'CASHBACK',
      tag: 'REAL-TIME',
      iconImage: '/assets/images/priorityCasino/middleCard.png',
      features: [
        'Unlimited cashback on all bets',
        'Credited instantly after each game',
        'No wagering requirements',
        'Withdraw anytime, no limits'
      ],
      featured: true
    },
    {
      title: 'ELITE',
      subtitle: 'VIP ACCESS',
      tag: 'EXCLUSIVE',
      iconImage: '/assets/images/priorityCasino/rightCard.png',
      features: [
        'Access to private tournaments',
        'Dedicated account manager 24/7',
        'Higher betting limits unlocked',
        'Premium rewards & giveaways'
      ]
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="px-6 py-2 bg-gray-900/50 rounded-full border border-yellow-500/30 backdrop-blur-sm">
              <span className="text-yellow-500 font-semibold tracking-wider text-sm">EXCLUSIVE CRYPTO REWARDS PROGRAM</span>
            </div>
          </div>

          <h2 className="font-cinzel font-bold text-5xl md:text-6xl mb-4 text-white">
            PRIORITY REWARDS
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Unlock exclusive benefits and maximize your crypto casino experience
          </p>

          {/* Casino Logo */}
          <div className="flex justify-center my-8">
            <Image
              src="/assets/images/priorityCasino/casinoLogo.png"
              alt="Casino Logo"
              className="h-40 w-auto object-contain"
              width={160}
              height={160}
            />
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-500"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-500"></div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`group relative ${tier.featured ? 'md:scale-110 md:z-10' : ''}`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
              }}
            >
              {/* Top Badge - Centered on border */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="px-6 py-2 bg-black backdrop-blur-xl rounded-full border-2 border-yellow-500 shadow-xl shadow-yellow-500/30">
                  <span className="text-yellow-400 text-xs font-black tracking-widest">{tier.tag}</span>
                </div>
              </div>

              {/* Enhanced Glow Effect for featured card */}
              <div className={`absolute -inset-1 ${tier.featured ? 'bg-yellow-500/30' : 'bg-yellow-500/20'} rounded-3xl blur-xl ${tier.featured ? 'opacity-50' : 'opacity-0'} group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Card */}
              <div className={`relative bg-gradient-to-b from-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl border-2 ${tier.featured ? 'border-yellow-500' : 'border-gray-800'} group-hover:border-yellow-500/50 overflow-hidden transition-all duration-500 ${tier.featured ? 'shadow-2xl shadow-yellow-500/20' : ''}`}>

                {/* Icon */}
                <div className="flex justify-center pt-12 pb-6">
                  <Image
                    src={tier.iconImage}
                    alt={tier.title}
                    width={80}
                    height={80}
                    className={`w-25 h-25 object-contain transform group-hover:scale-110 transition-transform duration-500 ${tier.featured ? 'scale-110' : ''}`}
                  />
                </div>

                {/* Title */}
                <div className="text-center px-8 pb-6">
                  <h3 className="text-5xl font-black mb-2 text-yellow-400">
                    {tier.title}
                  </h3>
                  <p className="text-white text-xl font-bold tracking-wider">
                    {tier.subtitle}
                  </p>
                </div>

                {/* Activate Button */}
                <div className="px-8 pb-8">
                  <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-black text-lg py-4 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 relative overflow-hidden group/btn">
                    <span className="relative z-10">ACTIVATE NOW</span>
                    <div className="absolute inset-0 bg-white/20 transform translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
                </div>

                {/* Features List */}
                <div className="px-8 pb-8 space-y-3">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-300">
                      <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Border */}
                <div className={`h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent ${tier.featured ? 'opacity-100' : 'opacity-50'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap');
        
        .font-cinzel {
          font-family: 'Cinzel', serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default PriorityCasinoSection;