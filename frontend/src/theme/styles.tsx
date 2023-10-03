import { GlobalStyleProps, mode, Styles } from '@chakra-ui/theme-tools';

export const styles: Styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
      bg: mode('white', 'gray.700')(props),
    },
    '*::placeholder': {
      color: 'gray.400',
    },
    html: {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    },
    'h1.chakra-heading': {
      fontSize: ['42px', '64px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    'h2.chakra-heading': {
      fontSize: ['32px', '40px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    'h3.chakra-heading': {
      fontSize: ['26px', '32px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    'h4.chakra-heading': {
      fontSize: ['20px', '24px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    'h5.chakra-heading': {
      fontSize: ['16px', '20px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    'h6.chakra-heading': {
      fontSize: ['14px', '16px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    '.scroll-bar': {
      overflow: 'hidden',
      overflowX: 'auto',
      overflowY: 'auto',
    },
    '.scroll-bar::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
      borderRadius: '20px',
    },
    '.scroll-bar::-webkit-scrollbar-track': {
      background: '#F8F8FA',
      borderRadius: '20px',
    },
    '.scroll-bar::-webkit-scrollbar-thumb': {
      background: 'cyanBlue',
      borderRadius: '20px',
    },
    '.scroll-bar::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
    '.scroll-hidden::-webkit-scrollbar': {
      display: 'none',
    },
    '.button': {
      h: '42px',
      minW: '10',
      px: '6',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      lineHeight: '1.5',
      fontWeight: 'semibold',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _focusVisible: {
        boxShadow: 'outline',
      },
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
        boxShadow: 'none',
      },
      _hover: {
        _disabled: {
          bg: 'initial',
        },
      },
    },
    '.button-primary': {
      bg: 'primary.500',
      _hover: {
        bg: 'primary.600',
      },
      _focusVisible: {
        bg: 'primary.600',
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
      },
      _focus: {
        bg: 'primary.600',
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
      },
    },
    '.w72': {
      w: '72',
    },
    '.wFull': {
      w: 'full',
    },
  }),
};
