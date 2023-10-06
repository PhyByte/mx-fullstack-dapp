import {
  ApiNetworkProvider,
  NetworkConfig,
} from "@multiversx/sdk-network-providers/out";
// @ts-ignore

import { getESDT, getNFT } from "../../config/esdt";
import { API_REFRESH_RATE, getApiUrl } from "../../config/mvx";
import {
  ESDT,
  MVXEconomics,
  MVXMexEconomics,
  MVXStakingProvider,
  NFT,
} from "../../types";
import { getCollectionInfo, getTokenInfo } from "./api";

export let storagenetworkProvider = new ApiNetworkProvider(getApiUrl());
export let networkConfig: NetworkConfig;
export let economics: MVXEconomics;
export let mexEconomics: MVXMexEconomics;
export let stakingProviders: MVXStakingProvider[];

export let esdts: ESDT[];
export let nfts: NFT[];

async function updateMVXData() {
  try {
    networkConfig = await storagenetworkProvider.getNetworkConfig();
    economics = await storagenetworkProvider.doGetGeneric("economics");
    mexEconomics = await storagenetworkProvider.doGetGeneric("mex-economics");
    stakingProviders = await storagenetworkProvider.doGetGeneric("providers");
    esdts = await updateESDTs();
    nfts = await updateNFTs();
  } catch (err) {
    console.log("ERROR:" + err);
  }
}

updateMVXData();
var interval = setInterval(updateMVXData, API_REFRESH_RATE);

// Go through the Array of ESDT identifiers and get the ESDT data from the API
async function updateESDTs() {
  const tokenInfoPromises = getESDT().map(async (tokenId) => {
    const tokenInfo = await getTokenInfo(tokenId);
    if (!tokenInfo) {
      return null;
    }

    const esdt: ESDT = {
      identifier: tokenInfo.identifier,
      name: tokenInfo.name,
      ticker: tokenInfo.ticker,
      decimal: tokenInfo.decimals,
      assets: {
        website: tokenInfo.assets.website,
        description: tokenInfo.assets.description,
        pngURL: tokenInfo.assets.pngUrl,
        svgURL: tokenInfo.assets.svgUrl,
      },
      price: tokenInfo.price,
    };

    return esdt;
  });

  const tokenInfos = await Promise.all(tokenInfoPromises);

  // Filter out any failed API calls
  return tokenInfos.filter((tokenInfo) => tokenInfo !== null) as ESDT[];
}

async function updateNFTs() {
  const nftInfoPromises = getNFT().map(async (nftId) => {
    const nftInfo = await getCollectionInfo(nftId);
    if (!nftInfo) {
      return null;
    }

    const nfts: NFT = {
      identifier: nftInfo.identifier,
      name: nftInfo.name,
      ticker: nftInfo.ticker,
      collection: nftInfo.collection,
      attributes: nftInfo.attributes,
      assets: {
        website: nftInfo.assets.website,
        description: nftInfo.assets.description,
        pngURL: nftInfo.assets.pngUrl,
        svgURL: nftInfo.assets.svgUrl,
      },
    };
    return nfts;
  });

  const nftInfos = await Promise.all(nftInfoPromises);

  // Filter out any failed API calls
  return nftInfos.filter((nftInfo) => nftInfo !== null) as NFT[];
}
