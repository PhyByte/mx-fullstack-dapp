import { numberInputAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

export const numberInputStyles = defineMultiStyleConfig({
  sizes: {
    xs: {
      field: {
        borderRadius: 'lg',
      },
    },
    sm: {
      field: {
        borderRadius: 'lg',
      },
    },
    md: {
      field: {
        borderRadius: 'lg',
      },
    },
    lg: {
      field: {
        borderRadius: 'lg',
      },
    },
  },
});
