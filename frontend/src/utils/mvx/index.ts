import { Network } from "./types";

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

export const formatEsdtAmount = (amount: number, decimal: number) => {
  if (isNaN(Number(amount)) || isNaN(Number(decimal))) {
    return 0;
  }

  return amount * Math.pow(10, -decimal);
};
