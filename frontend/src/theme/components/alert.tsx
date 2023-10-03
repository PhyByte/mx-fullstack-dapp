import { ComponentSingleStyleConfig } from '@chakra-ui/react';

export const AlertStyles: ComponentSingleStyleConfig = {
  variants: {
    subtle: {
      borderColor: 'red !important',
    },
    'no-hover': {
      _hover: {
        boxShadow: 'none',
      },
    },
    brand: {
      bg: '#582CFF',
      _hover: 'none',
      color: '#fff',
      _active: 'none',
    },
    'transparent-with-icon': {
      bg: 'transparent',
      fontWeight: 'bold',
      borderRadius: 'inherit',
      cursor: 'pointer',
      _hover: 'none',
      _active: {
        bg: 'transparent',
        transform: 'none',
        borderColor: 'transparent',
      },
      _focus: {
        boxShadow: 'none',
      },
    },
  },
  baseStyle: {
    borderRadius: '12px',
    _focus: {
      boxShadow: 'none',
    },
  },
};
