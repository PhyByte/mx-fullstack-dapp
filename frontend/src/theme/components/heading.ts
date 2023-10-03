import { ComponentSingleStyleConfig } from '@chakra-ui/react';

export const headingStyles: ComponentSingleStyleConfig = {
  baseStyle: {
    fontFamily: 'heading',
    fontWeight: 'bold',
  },
  variants: {
    h1: {
      fontSize: ['42px', '64px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    h2: {
      fontSize: ['32px', '40px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    h3: {
      fontSize: ['26px', '32px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    h4: {
      fontSize: ['20px', '24px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    h5: {
      fontSize: ['16px', '20px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    h6: {
      fontSize: ['14px', '16px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
  },
  sizes: {
    '4xl': {
      fontSize: ['6xl', null, '7xl'],
      lineHeight: 1,
    },
    '3xl': {
      fontSize: ['5xl', null, '6xl'],
      lineHeight: 1,
    },
    '2xl': {
      fontSize: ['4xl', null, '5xl'],
      lineHeight: [1.2, null, 1],
    },
    xl: {
      fontSize: ['3xl', null, '4xl'],
      lineHeight: [1.33, null, 1.2],
    },
    lg: {
      fontSize: ['2xl', null, '3xl'],
      lineHeight: [1.33, null, 1.2],
    },
    md: {
      fontSize: 'xl',
      lineHeight: 1.2,
    },
    sm: {
      fontSize: 'md',
      lineHeight: 1.2,
    },
    xs: {
      fontSize: 'sm',
      lineHeight: 1.2,
    },
  },
  defaultProps: {
    size: 'md',
  },
};
