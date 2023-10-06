export enum Network {
  MAINNET = "mainnet",
  DEVNET = "devnet",
}

export const selectDependingOnNetwork = (
  network: Network,
  mainnetValue: string,
  devnetValue: string
) => {
  switch (network) {
    case Network.MAINNET: {
      return mainnetValue;
    }

    case Network.DEVNET: {
      return devnetValue;
    }

    default: {
      console.error(`MVX_NETWORK: ${network} is not a valid network!!!`);
      throw new Error(`MVX_NETWORK: ${network} is not a valid network!!!`);
    }
  }
};
