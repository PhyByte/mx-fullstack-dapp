import {
  extendTheme,
  theme as chakraTheme,
  withDefaultProps,
} from '@chakra-ui/react';

import { background } from './background';
import { components } from './components';
import { breakpoints, colors } from './foundations';
import { styles } from './styles';

const theme = {
  colors: {
    ...chakraTheme.colors,
    ...colors,
  },
  background,
  styles,
  breakpoints,
  components,
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export default extendTheme(
  theme,
  config,
  withDefaultProps({
    defaultProps: {
      size: 'sm',
    },
    components: ['Input', 'NumberInput', 'PinInput', 'Button', 'IconButton'],
  }),
);
