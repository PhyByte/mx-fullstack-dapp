import { ComponentStyleConfig } from '@chakra-ui/react';

export const switchStyles: ComponentStyleConfig = {
  variants: {
    brand: {
      bg: 'red.500',
      _hover: {
        bg: 'primary.500',
      },
      _active: {
        bg: 'primary.600',
      },
      _focus: 'none',
    },
  },
};
