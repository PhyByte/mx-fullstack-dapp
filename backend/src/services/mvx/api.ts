import axios from "axios";
import { getApiUrl, getDelegationApiUrl } from "../../config/mvx";
import { MVXTokenAccount, UserStakes } from "./types";

let lastFetchTime = Date.now();
let requestCount = 0;
const rateLimitPerSecond = 10; // Set your API rate limit here
const interval = 1000; // 1000ms equals 1 second

export async function rateLimitAwaiter() {
  const currentTime = Date.now();
  const timeElapsed = currentTime - lastFetchTime;

  if (timeElapsed < interval && requestCount >= rateLimitPerSecond) {
    // Wait if we are about to exceed the rate limit
    await new Promise((resolve) => setTimeout(resolve, interval - timeElapsed));
    // Reset the request count and last fetch time after waiting
    requestCount = 0;
    lastFetchTime = Date.now();
  } else if (timeElapsed >= interval) {
    // If 1 second or more has passed since the last fetch, reset the counters
    requestCount = 0;
    lastFetchTime = currentTime;
  }

  requestCount++;
}

export async function getAccountTokenBalance(address: string, tokenId: string) {
  await rateLimitAwaiter();
  try {
    const { data } = await axios.get(
      `${getApiUrl()}/accounts/` + address + "/tokens/" + tokenId
    );
    let result = data as MVXTokenAccount;
    return result.balance;
  } catch (err) {
    console.log("ERROR:" + err);
  }
}

export async function getDelegationDetails(address: string) {
  await rateLimitAwaiter();
  try {
    const { data } = await axios.get(
      `${getDelegationApiUrl()}/accounts/` + address + "/delegations"
    );
    return data as UserStakes[];
  } catch (err) {
    console.log("ERROR:" + err);
  }
}

export async function getTokenInfo(tokenId: string) {
  await rateLimitAwaiter();
  try {
    const { data } = await axios.get(`${getApiUrl()}/tokens/` + tokenId);
    return data;
  } catch (err) {
    console.log("ERROR:" + err);
  }
}

export async function getCollectionInfo(collectionId: string) {
  await rateLimitAwaiter();
  try {
    const { data } = await axios.get(
      `${getApiUrl()}/collections/` + collectionId
    );
    return data;
  } catch (err) {
    console.log("ERROR:" + err);
  }
}

export async function getAccountTokens(address: string) {
  await rateLimitAwaiter();
  try {
    const { data } = await axios.get(
      `${getDelegationApiUrl()}/accounts/` + address + `/tokens`
    );
    return data as JSON;
  } catch (err) {
    console.log("ERROR:" + err);
  }
}

export async function getAccountNFTCollection(
  address: string,
  collection: string
) {
  await rateLimitAwaiter();
  try {
    const { data } = await axios.get(
      `${getApiUrl()}/accounts/` + address + `/nfts?collection=` + collection,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  } catch (err) {
    console.log("ERROR:" + err);
    return undefined;
  }
}
