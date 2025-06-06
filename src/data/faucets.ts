import { Faucet } from '../types/faucet';

export const faucets: Faucet[] = [
  /*
    {
    id: '0',
    name: 'OpenBuild Monad Faucet',                               // 名称
    url: 'https://faucet.openbuild.xyz/monad',                    
    requiresMainnetFunds: false,
    supportedNetworks: ['Monad Testnet'],
    supportedTokens: ['MON'],
    authMethods: ['GitHub', 'Google','Wallet'],
    features: ['No Mainnet Required', 'Social Login', 'Daily Limit'],
    lastUpdated: '2025-06-05',
    description: 'Official Monad testnet faucet with social authentication'
  },
  */
  {
    id: '1',
    name: 'OpenBuild Monad Faucet', 
    url: 'https://faucet.openbuild.xyz/monad',                    
    requiresMainnetFunds: false,
    supportedNetworks: ['Monad Testnet'],
    supportedTokens: ['MON'],
    authMethods: ['GitHub', 'Google','Wallet'],
    features: ['No Mainnet Required', 'Social Login', 'Daily Limit'],
    lastUpdated: '2025-06-05',
    description: 'Official Monad testnet faucet with social authentication'
  },
  {
    id: '2',
    name: 'VitaFlux Faucet',
    url: 'https://t.me/sevenflux_faucet_bot',
    requiresMainnetFunds: false,
    supportedNetworks: ['Ethereum Sepolia'],
    supportedTokens: ['ETH'],
    authMethods: ['Telegram'],
    features: ['Telegram Bot'],
    lastUpdated: '2025-06-05',
    description: 'Multi-chain faucet supporting various testnets'
  },
  {
    id: '3',
    name: 'HackQuest Faucet',
    url: 'https://hackquest.io/faucet',
    requiresMainnetFunds: false,
    supportedNetworks: ['EDU Chain Testnet','Pharos Devnet','BNB Smart Chain Testnet','Mantle Sepolia Testnet','Linea Sepolia','AIA Testnet','Scroll Sepolia Testnet','Arbitrum Sepolia'],
    supportedTokens: ['ETH', 'OP', 'EDU', 'TBNB','MNT','AIA'],
    authMethods: ['GitHub', 'Google','MetaMusk','OCID','Email'],
    features: ['Educational Focus', 'L2 Networks', 'Quest Integration'],
    lastUpdated: '2025-06-05',
    description: 'Developer-focused faucet with educational resources'
  },
  {
    id: '4',
    name: 'ChainLink Faucet',
    url: 'https://faucets.chain.link',
    requiresMainnetFunds: true,
    supportedNetworks: ['Avalanche Fuji','Ethereum Sepolia', 'Base Sepolia','Scrool Sepolia Testnet','Polygon Amoy','Arbitrum Sepolia','WEMIX Testnet','Kroma Sepolia','ZKsync Sepolia','Linea Sepolia', 'Metis Sepolia','Polygon Cardona zkEVM','Mode Sepolia','Blast Sepolia','Ethereum Holesky','BNB Chain Testnet'],
    supportedTokens: ['AVAX', 'ETH', 'POL','WEMIX','METIX','LINK'],
    authMethods: ['Wallet Connection'],
    features: ['Official', 'Multiple Networks', 'LINK Tokens'],
    lastUpdated: '2025-06-05',
    description: 'Supports the above native token, as well as Link'
  },
  {
    id: '5',
    name: 'Alchemy Faucet',
    url: 'https://www.alchemy.com/faucets',
    requiresMainnetFunds: true,
    supportedNetworks: ['Ethereum Sepolia', 'Ethereum Holesky', 'Arbitrum Sepolia','Optimism Sepolia','Base Sepolia','Startnet Sepolia','ZKsync Sepolia','Polygon Amoy','World Chain Sepolia','Soneium Minato','CrossFi Testnet','Syndicate Exo','Monad Testnet','Gensyn Testnet','Humanity Testnet'],
    supportedTokens: ['ETH', 'MATIC','XFI','SYND','MON','tHP'],
    authMethods: ['Email','Google','SSO'],
    features: ['Developer Tools', 'API Integration', 'Higher Limits'],
    lastUpdated: '2025-06-05',
    description: 'Developer-oriented faucet with API access'
  },
  {
    id: '6',
    name: 'Monad Faucet',
    url: 'https://faucet.monad.xyz/',
    requiresMainnetFunds: true,
    supportedNetworks: ['Monad Testnet'],
    supportedTokens: ['MON'],
    authMethods: ['No Need To Log In'],
    features: ['Developer Tools', 'API Integration', 'Higher Limits'],
    lastUpdated: '2025-06-05',
    description: 'Developer-oriented faucet with API access'
  },
  {
    id: '7',
    name: 'Monad Faucet',
    url: 'https://faucet.monad.xyz/',
    requiresMainnetFunds: true,
    supportedNetworks: ['Monad Testnet'],
    supportedTokens: ['MON'],
    authMethods: ['No Need To Log In'],
    features: ['Developer Tools', 'API Integration', 'Higher Limits'],
    lastUpdated: '2025-06-05',
    description: 'Developer-oriented faucet with API access'
  }
];

export const translations = {
  en: {
    title: 'Praxis Grove',
    subtitle: 'Blockchain Faucet List',
    searchPlaceholder: 'Search faucets...',
    filters: {
      all: 'All',
      network: 'Network',
      token: 'Token',
      authMethod: 'Auth Method',
      mainnet: 'Mainnet Required',
      feature: 'Features',
      yes: 'Yes',
      no: 'No'
    },
    faucetCard: {
      networks: 'Networks',
      tokens: 'Tokens',
      auth: 'Authentication',
      features: 'Features',
      lastUpdated: 'Last Updated',
      visitFaucet: 'Visit Faucet',
      mainnetRequired: 'Mainnet funds required',
      noMainnetRequired: 'No mainnet funds required'
    },
    footer: {
      community: 'Community',
      documentation: 'Documentation',
      support: 'Support',
      feedback: 'Send Feedback',
      social: 'Follow Us'
    }
  },
  zh: {
    title: 'Praxis Grove',
    subtitle: '区块链水龙头列表',
    searchPlaceholder: '搜索水龙头...',
    filters: {
      all: '全部',
      network: '网络',
      token: '代币',
      authMethod: '登录方式',
      mainnet: '需要主网资金',
      feature: '特性',
      yes: '是',
      no: '否'
    },
    faucetCard: {
      networks: '支持网络',
      tokens: '支持代币',
      auth: '认证方式',
      features: '特性',
      lastUpdated: '最后更新',
      visitFaucet: '访问水龙头',
      mainnetRequired: '需要主网资金',
      noMainnetRequired: '无需主网资金'
    },
    footer: {
      community: '社区',
      documentation: '文档',
      support: '支持',
      feedback: '发送反馈',
      social: '关注我们'
    }
  }
};