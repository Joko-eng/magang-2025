type NetworkSpecificText = {
  solana: string
  sui: string
  ethereum: string
  bnb: string
  tron: string
}

type DynamicFeature = {
  type: string
  text: NetworkSpecificText | string
}

type Feature = string | DynamicFeature

export type Frequency = {
  value: 'solana' | 'sui' | 'ethereum' | 'bnb' | 'tron'
  label: string
  priceSuffix: string
}

export type FrequencySocMed = {
  value: 'monthly' | 'yearly'
  label: string
  priceSuffix: string
}

export const frequencies: Frequency[] = [
  { value: 'solana', label: 'SOLANA', priceSuffix: '/project' },
  { value: 'sui', label: 'SUI', priceSuffix: '/project' },
  { value: 'ethereum', label: 'ETHEREUM', priceSuffix: '/project' },
  { value: 'bnb', label: 'BNB', priceSuffix: '/project' },
  { value: 'tron', label: 'TRON', priceSuffix: '/project' },
]

export const frequenciesSocMed: FrequencySocMed[] = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/monthly' },
  { value: 'yearly', label: 'Yearly', priceSuffix: '/yearly' },
]

export type Tier = {
  id: string
  name: string
  href: string
  price: {
    solana?: string
    sui?: string
    ethereum?: string
    bnb?: string
    tron?: string
    monthly?: string
    yearly?: string
  }
  description: string
  features: Feature[]
  mostPopular: boolean
}

export const tokenTiers: Tier[] = [
  {
    id: 'token-tier-basic',
    name: 'Basic Package',
    href: '#',
    price: {
      solana: '$2.000',
      sui: '$1.500',
      ethereum: '$12.500',
      bnb: '$4.500',
      tron: '$4.000',
    },
    description: 'Essential features for creating a basic token.',
    features: [
      {
        type: 'network',
        text: {
          solana: 'Token creation on the SOLANA network',
          sui: 'Token creation on the SUI network',
          ethereum: 'Token creation on the ETHEREUM network',
          bnb: 'Token creation on the BNB network',
          tron: 'Token creation on the TRON network',
        },
      },
      'Supply Coin 1M',
      {
        type: 'liquidity',
        text: {
          solana: 'Add Liquidity $50 USD',
          sui: 'Add Liquidity $30 USD',
          ethereum: 'Add Liquidity $70 USD',
          bnb: 'Add Liquidity $50 USD',
          tron: 'Add Liquidity $50 USD',
        },
      },
      'Social Media ( X/Twitter, Telegram, and Instagram )',
      'Website + Free Domain 1 Year',
      'Manual Book',
      'Whitepaper & Roadmap',
      'NusaDex & Other Exchange Listings',
    ],
    mostPopular: false,
  },
  {
    id: 'token-tier-standard',
    name: 'Standard Package',
    href: '#',
    price: {
      solana: '$4.000',
      sui: '$3.000',
      ethereum: '$37.000',
      bnb: '$9.000',
      tron: '$7.000',
    },
    description: 'Essential features for creating a standard token.',
    features: [
      {
        type: 'network',
        text: {
          solana: 'Token creation on the SOLANA network',
          sui: 'Token creation on the SUI network',
          ethereum: 'Token creation on the ETHEREUM network',
          bnb: 'Token creation on the BNB network',
          tron: 'Token creation on the TRON network',
        },
      },
      'Supply Coin 5M',
      {
        type: 'liquidity',
        text: {
          solana: 'Add Liquidity $75 USD',
          sui: 'Add Liquidity $50 USD',
          ethereum: 'Add Liquidity $100 USD',
          bnb: 'Add Liquidity $75 USD',
          tron: 'Add Liquidity $75 USD',
        },
      },
      'Social Media ( X/Twitter, Telegram, and Instagram )',
      'Website + Free Domain 1 Year',
      'Manual Book',
      'Whitepaper & Roadmap',
      'NusaDex & Other Exchange Listings',
      'First 3 posts for promotion.',
    ],
    mostPopular: true,
  },
  {
    id: 'token-tier-advance',
    name: 'Advance Package',
    href: '#',
    price: {
      solana: '$6.500',
      sui: '$4.500',
      ethereum: '$74.000',
      bnb: '$12.500',
      tron: '$9.500',
    },
    description: 'Essential features for creating a advance token.',
    features: [
      {
        type: 'network',
        text: {
          solana: 'Token creation on the SOLANA network',
          sui: 'Token creation on the SUI network',
          ethereum: 'Token creation on the ETHEREUM network',
          bnb: 'Token creation on the BNB network',
          tron: 'Token creation on the TRON network',
        },
      },
      'Supply Coin 10M',
      {
        type: 'liquidity',
        text: {
          solana: 'Add Liquidity $100 USD',
          sui: 'Add Liquidity $75 USD',
          ethereum: 'Add Liquidity $130 USD',
          bnb: 'Add Liquidity $100 USD',
          tron: 'Add Liquidity $100 USD',
        },
      },
      'Social Media ( X/Twitter, Telegram, and Instagram )',
      'Website + Free Domain 1 Year',
      'Manual Book',
      'Whitepaper & Roadmap',
      'NusaDex & Other Exchange Listings',
      'First 10 posts for promotion.',
      'Exclusive Listing of NusaDex and other Exchanges',
      {
        type: 'header',
        text: 'Additional features such as:',
      },
      'Social Media X Verified',
      'Request custom Supply',
      '50 Wallet Holder',
    ],
    mostPopular: false,
  },
]

export const socialMediaTiers: Tier[] = [
  {
    id: 'social-tier-basic',
    name: 'Basic Package',
    href: '#',
    price: { monthly: '$2.450', yearly: '$28.000' },
    description: 'Get started with basic social media management.',
    features: [
      'Daily Posting (IG, X/Twitter, Telegram, TikTok, YouTube)',
      '8 feed',
      '4 video reels',
      'Content Planning Idea',
      'Content Generation Design',
      'Hastag Research & Caption Copywriting',
      'A/B Testing Ads',
      'Ads Report',
    ],
    mostPopular: false,
  },
  {
    id: 'social-tier-standard',
    name: 'Standard Package',
    href: '#',
    price: { monthly: '$3.050', yearly: '$36.000' },
    description: 'Get started with standard social media management.',
    features: [
      'Daily Posting (IG, X/Twitter, Telegram, TikTok, YouTube)',
      '14 feed',
      '8 video reels',
      'Content Planning Idea',
      'Content Generation Design',
      'Hastag Research & Caption Copywriting',
      'A/B Testing Ads',
      'Ads Report',
      'Social Media Report',
    ],
    mostPopular: true,
  },
  {
    id: 'social-tier-advance',
    name: 'Premium',
    href: '#',
    price: { monthly: '$4.000', yearly: '$47.500' },
    description: 'Get started with advance social media management.',
    features: [
      'Daily Posting (IG, X/Twitter, Telegram, TikTok, YouTube)',
      '20 feed',
      '10 video reels',
      'Content Planning Idea',
      'Content Generation Design',
      'Hastag Research & Caption Copywriting',
      'A/B Testing Ads',
      'Ads Report',
      'Social Media Report',
      'Analisa Audience',
      'Pengelolaan & Pengoptimalan Campaign',
    ],
    mostPopular: false,
  },
]
