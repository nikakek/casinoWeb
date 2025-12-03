'use client'
import React from 'react';
import Image from 'next/image';

const BlogsSection = () => {
  return (
<section className="relative py-8 px-4 sm:px-6 lg:px-8 overflow-hidden flex h-screen items-center">

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Section label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span className="text-yellow-500 text-sm font-medium tracking-wider uppercase">Latest Insights</span>
            </div>

            {/* Title */}
            <h2 className="font-cinzel font-bold text-4xl sm:text-5xl md:text-6xl mb-6 text-white">
              BLOGS
            </h2>

            {/* Decorative line */}
            <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-500"></div>
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-500"></div>
            </div>

            {/* Subtitle */}
            <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Hear blogs about crypto gaming strategies, bonus guides, and the latest casino trends
            </p>

            {/* CTA Button */}
            <a
              href="/blogs"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/30"
            >
              <span>Explore All Blogs</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Right side - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-gray-900/50 backdrop-blur-sm">
                <Image
                  src="/assets/images/blogs.png"
                  alt="Casino blogs and gaming insights"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  width={1200}
                  height={800}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap');
        
        .font-cinzel {
          font-family: 'Cinzel', serif;
        }
      `}</style>
    </section>
  );
};

export default BlogsSection;