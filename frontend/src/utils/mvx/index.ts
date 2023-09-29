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
      process.exit();
    }
  }
};

export const formatEsdtAmount = (amount: number, decimal: number) => {
  if (isNaN(Number(amount))) {
    return 0;
  }

  return amount * Math.pow(10, -decimal);
};
