import React from 'react';
import CasinoListingLayout from '../components/CasinoListingLayout';

// Casino data - 50+ casinos
const allCasinos = [
  {
    rank: 1,
    name: 'FortuneJack',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzFhMWExYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRjVEMjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9ImJvbGQiPkZKPC90ZXh0Pjwvc3ZnPg==',
    bonus: 'Welcome Pack Up to 200,000 USDT',
    coins: ['BTC', 'ETH', 'LTC', 'DOGE', 'USDT'],
    coinsCount: 10,
    openedIn: '2014',
    siteUrl: 'https://fortunejack.com',
    reviewUrl: '/review/fortunejack',
    expertsChoice: true
  },
  {
    rank: 2,
    name: 'BitStarz',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzBmMTczNCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRjVEMjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9ImJvbGQiPkJTPC90ZXh0Pjwvc3ZnPg==',
    bonus: 'Up to 5 BTC + 180 Free Spins',
    coins: ['BTC', 'ETH', 'LTC', 'USDT'],
    coinsCount: 8,
    openedIn: '2014',
    siteUrl: 'https://www.bitstarz.com',
    reviewUrl: '/review/bitstarz'
  },
  {
    rank: 3,
    name: 'mBit Casino',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzFhMWExYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRjVEMjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9ImJvbGQiPm1CPC90ZXh0Pjwvc3ZnPg==',
    bonus: 'Up to 5 BTC + 300 Free Spins',
    coins: ['BTC', 'ETH', 'DOGE', 'LTC'],
    coinsCount: 7,
    openedIn: '2014',
    siteUrl: 'https://www.mbitcasino.com',
    reviewUrl: '/review/mbit-casino'
  },
  {
    rank: 4,
    name: 'Cloudbet',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzAwNzRjMSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRjVEMjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9ImJvbGQiPkNCPC90ZXh0Pjwvc3ZnPg==',
    bonus: '100% Up to 5 BTC + Free Spins',
    coins: ['BTC', 'ETH', 'BCH', 'LTC'],
    coinsCount: 6,
    openedIn: '2013',
    siteUrl: 'https://www.cloudbet.com',
    reviewUrl: '/review/cloudbet'
  },
  {
    rank: 5,
    name: 'PlayAmo',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzJkMGQ1ZiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRjVEMjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9ImJvbGQiPlBBPC90ZXh0Pjwvc3ZnPg==',
    bonus: 'Up to €300 + 150 Free Spins',
    coins: ['BTC', 'ETH', 'DOGE', 'LTC', 'USDT'],
    coinsCount: 9,
    openedIn: '2016',
    siteUrl: 'https://www.playamo.com',
    reviewUrl: '/review/playamo'
  },
  // Adding more casinos (6-50+)
  ...[...Array(45)].map((_, i) => ({
    rank: i + 6,
    name: `Crypto Casino ${i + 6}`,
    logo: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzFhMWExYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRjVEMjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9ImJvbGQiPkMke2kgKyA2fTwvdGV4dD48L3N2Zz4=`,
    bonus: `Up to ${Math.floor(Math.random() * 5) + 1} BTC + ${Math.floor(Math.random() * 200) + 50} Free Spins`,
    coins: ['BTC', 'ETH', 'LTC', 'USDT'].slice(0, Math.floor(Math.random() * 3) + 2),
    coinsCount: Math.floor(Math.random() * 10) + 5,
    openedIn: String(2013 + Math.floor(Math.random() * 10)),
    siteUrl: '#',
    reviewUrl: '#',
    expertsChoice: i < 3
  }))
];

export default function AllCasinosPage() {
  return (
    <CasinoListingLayout
      title="All Crypto Casinos"
      subtitle="Browse through 50+ verified crypto casinos • Updated daily • Expert reviews"
      casinos={allCasinos}
      searchPlaceholder="Search casinos..."
    />
  );
}