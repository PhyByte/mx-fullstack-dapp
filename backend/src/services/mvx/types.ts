export type MVXAccount = {
  address: string;
  balance: number;
  nonce: number;
  chard: number;
  rootHash: string;
  txCount: number;
  scrCount: number;
  developerReward: number;
};

export type MVXTokenAccount = {
  identifier: string;
  name: string;
  ticker: string;
  owner: string;
  minted: string;
  burnt: string;
  initialMinted: string;
  decimals: number;
  isPaused: boolean;
  transactions: number;
  accounts: number;
  canUpgrade: boolean;
  canMint: boolean;
  canBurn: boolean;
  canChangeOwner: boolean;
  canPause: boolean;
  canFreeze: boolean;
  canWipe: boolean;
  supply: string;
  circulatingSupply: string;
  balance: string;
};

export type UserStakes = {
  address: string;
  contract: string;
  userUnBondable: number;
  userActiveStake: number;
  claimableRewards: number;
  userUndelegatedList: JSON;
};
