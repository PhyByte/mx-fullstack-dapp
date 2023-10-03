import { ComponentStyleConfig } from '@chakra-ui/react';

export const IconButtonStyles: ComponentStyleConfig = {
  variants: {
    subtle: {
      borderColor: 'red !important',
    },
    brand: {
      bgColor: 'primary.400',
      borderRadius: '8',
      opacity: '100%',
      blur: '2px',
      border: '2px',
      borderColor: 'primary.500',
      boxShadow: '2px 2px 2px 2px shadow.medium',
      _hover: { bgColor: 'primary.600' },
    },
    sidebarcollapser: {
      bgColor: 'primary.600',
      borderRadius: '8',
      opacity: '100%',
      blur: '2px',
      border: '2px',
      borderColor: 'primary.500',
      boxShadow: '2px 2px 2px 2px shadow.medium',
      _hover: { bgColor: 'primary.600' },
    },
  },
  baseStyle: {
    borderRadius: '12px',
    _focus: {
      boxShadow: 'none',
    },
  },
};
