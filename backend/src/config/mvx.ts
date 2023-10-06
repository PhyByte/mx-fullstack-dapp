import dotenv from "dotenv";
import { Network, selectDependingOnNetwork } from "./utils";
dotenv.config();

export const SERVER_PORT = process.env.SERVER_PORT || "4000";

export const MVX_NETWORK: Network = process.env.MVX_NETWORK as Network;

export const API_REFRESH_RATE = 10000; // 1 minute

//------------------------------------------------
//------------  Mainnet Config -------------------
//------------------------------------------------

export const MAINNET_API: string = process.env.MAINNET_API as string;
export const MAINNET_PROXY = process.env.MAINNET_PROXY as string;
export const MAINNET_DELEGATION_API = process.env
  .MAINNET_DELEGATION_API as string;

//------------------------------------------------
//------------  Devnet Config --------------------
//------------------------------------------------
export const DEVNET_PROXY = process.env.DEVNET_PROXY as string;
export const DEVNET_API = process.env.DEVNET_API as string;
export const DEVNET_DELEGATION_API = process.env
  .DEVNET_DELEGATION_API as string;

export const getChainId = () => selectDependingOnNetwork(MVX_NETWORK, "1", "D");
export const getApiUrl = () =>
  selectDependingOnNetwork(MVX_NETWORK, MAINNET_API, DEVNET_API);
export const getProxyUrl = () =>
  selectDependingOnNetwork(MVX_NETWORK, MAINNET_PROXY, DEVNET_PROXY);

export const getDelegationApiUrl = () =>
  selectDependingOnNetwork(
    MVX_NETWORK,
    MAINNET_DELEGATION_API,
    DEVNET_DELEGATION_API
  );
