export interface Faucet {
  id: string;
  name: string;
  url: string;
  requiresMainnetFunds: boolean;
  supportedNetworks: string[];
  supportedTokens: string[];
  authMethods: string[];
  features: string[];
  lastUpdated: string;
  description?: string;
}

export interface Language {
  code: 'en' | 'zh';
  name: string;
  flag: string;
}

export interface FilterState {
  search: string;
  network: string;
  token: string;
  authMethod: string;
  requiresMainnet: string;
  feature: string;
}