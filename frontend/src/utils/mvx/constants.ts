import { selectDependingOnNetwork } from ".";
import { Network } from "./types";

export const MVX_NETWORK: Network = import.meta.env.VITE_MVX_NETWORK as Network;
export const MAINNET_API = import.meta.env.VITE_MAINNET_API;
export const MAINNET_PROXY = import.meta.env.VITE_MAINNET_PROXY;

export const DEVNET_PROXY = import.meta.env.VITE_DEVNET_PROXY;
export const DEVNET_API = import.meta.env.VITE_DEVNET_API;

export const getChainId = () => selectDependingOnNetwork(MVX_NETWORK, "1", "D");
export const getApiUrl = () =>
  selectDependingOnNetwork(MVX_NETWORK, MAINNET_API, DEVNET_API);
export const getProxyUrl = () =>
  selectDependingOnNetwork(MVX_NETWORK, MAINNET_PROXY, DEVNET_PROXY);
