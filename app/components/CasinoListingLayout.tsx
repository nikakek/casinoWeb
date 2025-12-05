'use client'
import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import CryptoCasinoCard from './CryptoCasinoCard';
import AnimatedBackground from './Background';

interface Casino {
  rank: number;
  name: string;
  logo: string;
  bonus: string;
  coins: string[];
  coinsCount: number;
  openedIn: string;
  siteUrl: string;
  reviewUrl: string;
  expertsChoice?: boolean;
}

interface CasinoListingLayoutProps {
  title: string;
  subtitle: string;
  casinos: Casino[];
  searchPlaceholder?: string;
}

export default function CasinoListingLayout({
  title,
  subtitle,
  casinos,
  searchPlaceholder = 'Search casinos...'
}: CasinoListingLayoutProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Filter casinos
  const filteredCasinos = useMemo(() => {
    return casinos.filter(casino => {
      const matchesSearch = casino.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesYear = selectedYear === 'all' || casino.openedIn === selectedYear;
      
      return matchesSearch && matchesYear;
    });
  }, [searchTerm, selectedYear, casinos]);

  const uniqueYears = [...new Set(casinos.map(c => c.openedIn))].sort((a, b) => Number(b) - Number(a));

  return (
    <div className="relative min-h-screen pt-24">
      <AnimatedBackground />
      
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 from-yellow-500/10 via-transparent to-yellow-500/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 font-cinzel gold-text logo-shimmer tracking-wider">
            {title}
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        {/* Search & Filter Bar */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500/50 transition-colors"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-xl text-white hover:border-yellow-500/50 transition-colors"
          >
            <Filter size={18} />
            <span>Filters</span>
            {selectedYear !== 'all' && (
              <span className="ml-2 px-2 py-0.5 bg-yellow-500 text-black text-xs font-bold rounded">
                Active
              </span>
            )}
          </button>

          {/* Filters */}
          {showFilters && (
            <div className="grid md:grid-cols-2 gap-4 p-6 bg-[#1a1a1a] border-2 border-[#2a2a2a] rounded-xl">
              {/* Year Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Established</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-white focus:outline-none focus:border-yellow-500/50"
                >
                  <option value="all">All Years</option>
                  {uniqueYears.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSelectedYear('all');
                  }}
                  className="px-4 py-2 text-sm text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-400">
          Showing <span className="text-yellow-500 font-bold">{filteredCasinos.length}</span> casinos
        </div>

        {/* Casino Cards */}
        <div className="space-y-12">
          {filteredCasinos.map((casino) => (
            <CryptoCasinoCard key={casino.rank} {...casino} />
          ))}
        </div>

        {/* No Results */}
        {filteredCasinos.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎰</div>
            <h3 className="text-2xl font-bold text-white mb-2">No casinos found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your filters or search term</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedYear('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}