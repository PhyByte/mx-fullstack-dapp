import { ComponentStyleConfig } from '@chakra-ui/react';

export const containerStyles: ComponentStyleConfig = {
  variants: {
    statBlack: {
      bgGradient:
        'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(4, 5, 28, 0.5) 38.54%, rgba(0, 0, 0, 0.235) 100%)',
      borderRadius: '16',
      p: '6',
      opacity: '100%',
      boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.1)',
    },
    statGreen: {
      bgGradient:
        'linear-gradient(180deg, rgba(29, 151, 136, 0.84) 41.67%, rgba(21, 135, 110, 0.3) 71.88%, rgba(46, 89, 145, 0.37) 100%)',
      borderRadius: '16',
      p: '6',
      opacity: '100%',
      boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.1)',
    },
    statBlue: {
      bgGradient:
        'linear-gradient(180deg, rgba(18, 96, 182, 0.85) 40.1%, rgba(25, 65, 116, 0.37) 100%)',
      borderRadius: '16',
      p: '6',
      opacity: '100%',
      boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.1)',
    },
    statOrange: {
      bgGradient:
        'linear-gradient(180deg, #0094B5 3.12%, rgba(35, 67, 74, 0.56) 100%)',
      borderRadius: '16',
      p: '6',
      opacity: '100%',
      boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.1)',
    },
    disclaimer: {
      bgGradient:
        'linear-gradient(180deg, rgba(29, 151, 136, 0.84) 41.67%, rgba(21, 135, 110, 0.3) 71.88%, rgba(46, 89, 145, 0.37) 100%)',
      borderRadius: '16',
      opacity: '100%',
      my: '8',
      boxShadow: '1px 2px 2px rgba(0, 0, 0, 0.1)',
    },
    statBondiBlue: {
      bgGradient:
        'linear-gradient(180deg, rgba(0, 148, 181, 0.5) 46.98%, rgba(21, 135, 110, 0.15) 77.18%, rgba(46, 89, 145, 0.185) 105.31%)',
      borderRadius: '16',
      px: '3',
      pt: '6',
      pb: '3',
      opacity: '100%',
      boxShadow: '2px 4px 4px rgba(0, 0, 0, 0.1)',
    },
    tokenValue: {
      borderWidth: '3',
      borderRadius: '30',
      border: '1px',
      borderColor: 'black',
      opacity: '100%',
    },
    brand: {
      bgGradient: 'linear(to-br, primary.400, primary.500)',
      borderRadius: '8',
      opacity: '100%',
      border: '2px',
      borderColor: 'primary.600',
      boxShadow: '2px 2px 2px 2px shadow.medium',
    },
    brandNoShadow: {
      bgGradient: 'linear(to-br, primary.400, primary.500)',
      p: '1',
      borderRadius: '8',
      opacity: '100%',
      blur: '2px',
      border: '2px',
      borderColor: 'primary.600',
    },
    topBarMenu: {
      h: '60%',
      bgGradient: 'linear(to-br, primary.400, primary.500)',
      borderRadius: '8',
      opacity: '100%',
      border: '2px',
      borderColor: 'primary.600',
    },
    addressHolder: {
      bgGradient: 'linear(to-br, gray.400, gray.800)',
      p: '1',
    },
    participation: {
      w: 'auto',
      maxW: 'auto',
      textColor: 'white',
      position: 'relative',
      px: '18px',
      pb: '14',
      mx: '0',
      borderRadius: 'lg',
      h: '56px',
    },
  },
  baseStyle: {
    borderRadius: '12px',
    _focus: {
      boxShadow: 'none',
    },
  },
};
