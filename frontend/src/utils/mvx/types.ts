export enum Network {
  MAINNET = "mainnet",
  DEVNET = "devnet",
}

export const MVX_NETWORK: Network = import.meta.env.VITE_MVX_NETWORK as Network;
