// 1. Import the utilities
import { createBreakpoints } from '@chakra-ui/theme-tools';
// 2. Update the breakpoints as key-value pairs
export const breakpoints = createBreakpoints({
  xs: '320px',
  sm: '513px',
  md: '767px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1600px',
});
