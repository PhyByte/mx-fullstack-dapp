export type Wallet = {
    id: number;
    name: string;
    address: string;
    available: string;
    totalStaked: string;
    totalClaimable: string;
  };
  
  export type MVXStakingProvider = {
    provider: string;
    serviceFee: number;
    delegationCap: string;
    apr: number;
    numUsers: number;
    cumulatedRewards: string;
    identity: string;
    numNodes: number;
    stake: string;
    topUp: string;
    locked: string;
    featured: boolean;
  };
  
  export type WalletDelegation = {
    address: string;
    contract: string;
    userUnBondable: number;
    userActiveStake: number;
    claimableRewards: number;
    userUndelegatedList: JSON;
  };
  // -------- Economics
  
  export type MVXEconomics = {
    totalSupply: number;
    circulatingSupply: number;
    staked: number;
    price: number;
    marketCap: number;
    apr: number;
    topUpApr: number;
    baseApr: number;
  };
  
  export type MVXMexEconomics = {
    totalSupply: number;
    circulatingSupply: number;
    price: number;
    marketCap: number;
    volume24h: number;
    marketPairs: number;
  };

  export type ESDT = {
    identifier: string;
    name: string;
    ticker: string;
    decimal: number;
    assets: {
      website: string;
      description: string;
      pngURL: string;
      svgURL: string;
    },
    price: number;
  };
  export type NFT = {
    identifier: string;
    collection: string;
    name: string;
    attributes: string;
    ticker: string;
    assets: {
      website: string;
      description: string;
      pngURL: string;
      svgURL: string;
    },
  };