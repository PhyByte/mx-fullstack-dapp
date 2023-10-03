import { ComponentStyleConfig } from '@chakra-ui/react';

export const linkStyles: ComponentStyleConfig = {
  baseStyle: {
    decoration: 'none',
    _hover: {
      textDecoration: 'none',
    },
    _focus: {
      boxShadow: 'none',
    },
  },
};
