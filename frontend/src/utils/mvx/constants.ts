import { selectDependingOnNetwork } from ".";
import { MVX_NETWORK } from "./types";

//------------------------------------------------
//------------  Mainnet Config -------------------
//------------------------------------------------
const MAINNET_API = "https://api.multiversx.com";
const MAINNET_PROXY = "https://gateway.multiversx.com";

//------------------------------------------------
//------------  Devnet Config --------------------
//------------------------------------------------
const DEVNET_API = "https://devnet-api.multiversx.com";
const DEVNET_PROXY = "https://devnet-gateway.multiversx.com";

export const getChainId = () => selectDependingOnNetwork(MVX_NETWORK,'1', 'D');
export const getApiUrl = () => selectDependingOnNetwork(MVX_NETWORK,MAINNET_API, DEVNET_API);
export const getProxyUrl = () => selectDependingOnNetwork(MVX_NETWORK,MAINNET_PROXY, DEVNET_PROXY);
