import { MVX_NETWORK } from "./mvx";

// Create a structure for store the ESDT tokens informations
export interface ESDTToken {
  name: string;
  tokenId: string;
  decimals: number;
}

//------------------------------------------------
//------------  Mainnet Config -------------------
//------------------------------------------------

const MAINNET_ESDT: string[] = ["MEX-455c57", "USDC-c76f1f", "UTK-2f80e9"];

const MAINNET_NFT: string[] = ["XPACHIEVE-5a0519", "QWTEVCARS-d0cb53"];

//------------------------------------------------
//------------  Devnet Config --------------------
//------------------------------------------------

const DEVNET_ESDT: string[] = ["MEX-455c57", "USDC-c76ff", "UTK-a2a792"];

const DEVNET_NFT: string[] = ["HLSR-e1019e", "TEST-b0fe13"];

export const getESDT = () =>
  MVX_NETWORK === "mainnet" ? MAINNET_ESDT : DEVNET_ESDT;

export const getNFT = () =>
  MVX_NETWORK === "mainnet" ? MAINNET_NFT : DEVNET_NFT;
