import { ComponentSingleStyleConfig } from '@chakra-ui/react';
export const textStyles: ComponentSingleStyleConfig = {
  baseStyle: {
    fontWeight: 'normal',
  },
  sizes: {
    xl: {
      fontSize: ['18px', null, '20px'],
      lineHeight: '160%',
    },
    lg: {
      fontSize: ['16px', null, '18px'],
      lineHeight: '145%',
    },
    md: {
      fontSize: ['14px', null, '16px'],
      lineHeight: '160%',
    },
    sm: {
      fontSize: ['12px', null, '14px'],
      lineHeight: '140%',
    },
    xs: {
      fontSize: ['10px', null, '12px'],
      lineHeight: '135%',
    },
  },
  defaultProps: {
    size: 'md',
  },
};
