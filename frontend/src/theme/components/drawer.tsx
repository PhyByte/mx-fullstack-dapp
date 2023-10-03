import { ComponentStyleConfig } from '@chakra-ui/react';

export const drawerStyles: ComponentStyleConfig = {
  variants: {
    brand: {
      bg: 'primary.400',
      color: '#fff',
      borderRadius: 'lg',
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
