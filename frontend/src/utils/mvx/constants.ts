import { selectDependingOnNetwork } from '.';
import { Network } from './types';

export const MVX_NETWORK: Network = import.meta.env.VITE_MVX_NETWORK as Network;

//------------------------------------------------
//------------  TOKEN DECIMALS -------------------
//------------------------------------------------
export const USDC_DECIMAL = 6;
export const BKT_DECIMAL = 18;
export const EGLD_DECIMAL = 18;

//------------------------------------------------
//------------  Mainnet Config -------------------
//------------------------------------------------
const MAINNET_API = 'https://api.multiversx.com';
const MAINNET_PROXY = 'https://gateway.multiversx.com';
//------------------------------------------------
//------------  Devnet Config --------------------
//------------------------------------------------
const DEVNET_API = 'https://devnet-api.multiversx.com';
const DEVNET_PROXY = 'https://devnet-gateway.multiversx.com';

export const CHAIN_ID = selectDependingOnNetwork('1', 'D');
export const API = selectDependingOnNetwork(MAINNET_API, DEVNET_API);
export const PROXY = selectDependingOnNetwork(MAINNET_PROXY, DEVNET_PROXY);
