import { MVX_NETWORK } from './constants';

export const selectDependingOnNetwork = (
  mainnetValue: string,
  devnetValue: string,
) => {
  switch (MVX_NETWORK) {
    case 'mainnet': {
      return mainnetValue;
    }

    case 'devnet': {
      return devnetValue;
    }

    default: {
      console.error(`MVX_NETWORK: ${MVX_NETWORK} is not a valid network!!!`);
      throw new Error(`MVX_NETWORK: ${MVX_NETWORK} is not a valid network!!!`);
    }
  }
};

export const formatEsdtAmount = (amount: number, decimal: number) => {
  if (isNaN(Number(amount)) || isNaN(Number(decimal))) {
    return 0;
  }

  return amount * Math.pow(10, -decimal);
};
