'use client'
import React from 'react';
import CasinoListingLayout from '../components/CasinoListingLayout';

// Casino data - 15 No KYC Casinos
const noKycCasinos = [
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
    reviewUrl: '/review/bitstarz',
    expertsChoice: true
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
    name: 'Stake Casino',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzAwMzgyZiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRjVEMjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9ImJvbGQiPlNUPC90ZXh0Pjwvc3ZnPg==',
    bonus: 'Up to $3,000 Welcome Bonus',
    coins: ['BTC', 'ETH', 'LTC', 'USDT', 'DOGE'],
    coinsCount: 12,
    openedIn: '2017',
    siteUrl: '#',
    reviewUrl: '#'
  },
  {
    rank: 6,
    name: 'BC.Game',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzBhMGEwYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRjVEMjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9ImJvbGQiPkJDPC90ZXh0Pjwvc3ZnPg==',
    bonus: 'Up to 5 BTC + 300% Bonus',
    coins: ['BTC', 'ETH', 'USDT', 'BNB'],
    coinsCount: 15,
    openedIn: '2017',
    siteUrl: '#',
    reviewUrl: '#'
  },
  {
    rank: 7,
    name: 'TrustDice',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzFhMzM1ZCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRjVEMjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9ImJvbGQiPlREPC90ZXh0Pjwvc3ZnPg==',
    bonus: 'Up to 3 BTC + 25 Free Spins',
    coins: ['BTC', 'ETH', 'LTC', 'DOGE'],
    coinsCount: 9,
    openedIn: '2018',
    siteUrl: '#',
    reviewUrl: '#'
  },
  {
    rank: 8,
    name: 'Roobet',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzJlMmUyZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRjVEMjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9ImJvbGQiPlJCPC90ZXh0Pjwvc3ZnPg==',
    bonus: '$30 Free + 100% Bonus',
    coins: ['BTC', 'ETH', 'LTC'],
    coinsCount: 6,
    openedIn: '2019',
    siteUrl: '#',
    reviewUrl: '#'
  },
  {
    rank: 9,
    name: 'Wolf.bet',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzBkMGQxMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRjVEMjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9ImJvbGQiPldCPC90ZXh0Pjwvc3ZnPg==',
    bonus: 'Up to 5 BTC Welcome Pack',
    coins: ['BTC', 'ETH', 'USDT', 'DOGE'],
    coinsCount: 8,
    openedIn: '2019',
    siteUrl: '#',
    reviewUrl: '#'
  },
  {
    rank: 10,
    name: 'Duelbits',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzFhMWExYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRjVEMjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9ImJvbGQiPkRCPC90ZXh0Pjwvc3ZnPg==',
    bonus: 'Up to $2,500 + 500 FS',
    coins: ['BTC', 'ETH', 'LTC', 'USDT'],
    coinsCount: 10,
    openedIn: '2020',
    siteUrl: '#',
    reviewUrl: '#'
  },
  {
    rank: 11,
    name: 'CryptoLeo',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzE1MTUxNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRjVEMjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9ImJvbGQiPkNMPC90ZXh0Pjwvc3ZnPg==',
    bonus: 'Up to 3 BTC + 225 FS',
    coins: ['BTC', 'ETH', 'DOGE', 'LTC'],
    coinsCount: 7,
    openedIn: '2019',
    siteUrl: '#',
    reviewUrl: '#'
  },
  {
    rank: 12,
    name: 'Bitsler',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzAwMWYzZiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRjVEMjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9ImJvbGQiPkJMPC90ZXh0Pjwvc3ZnPg==',
    bonus: 'Up to 1 BTC Welcome Bonus',
    coins: ['BTC', 'ETH', 'LTC', 'DOGE', 'USDT'],
    coinsCount: 11,
    openedIn: '2015',
    siteUrl: '#',
    reviewUrl: '#'
  },
  {
    rank: 13,
    name: 'WildTornado',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzJhMGEzZCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRjVEMjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9ImJvbGQiPldUPC90ZXh0Pjwvc3ZnPg==',
    bonus: 'Up to €300 + 100 FS',
    coins: ['BTC', 'ETH', 'LTC', 'BCH'],
    coinsCount: 8,
    openedIn: '2017',
    siteUrl: '#',
    reviewUrl: '#'
  },
  {
    rank: 14,
    name: 'Nitrogen Sports',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzBhMjQ0MCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRjVEMjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9ImJvbGQiPk5TPC90ZXh0Pjwvc3ZnPg==',
    bonus: '100% Sport Welcome Bonus',
    coins: ['BTC'],
    coinsCount: 5,
    openedIn: '2012',
    siteUrl: '#',
    reviewUrl: '#'
  },
  {
    rank: 15,
    name: 'BetChain',
    logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzFhMWExYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjRjVEMjYwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC13ZWlnaHQ9ImJvbGQiPkJDSDwvdGV4dD48L3N2Zz4=',
    bonus: 'Up to 1 BTC + 200 FS',
    coins: ['BTC', 'ETH', 'LTC', 'DOGE'],
    coinsCount: 9,
    openedIn: '2013',
    siteUrl: '#',
    reviewUrl: '#'
  }
];

export default function NoKycCasinosPage() {
  return (
    <CasinoListingLayout
      title="No KYC Crypto Casinos"
      subtitle="Play anonymously • No verification required • Instant withdrawals • 15 verified casinos"
      casinos={noKycCasinos}
      searchPlaceholder="Search No KYC casinos..."
    />
  );
}