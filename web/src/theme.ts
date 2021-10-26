import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakPoints = createBreakpoints({
  sm: '450px',
  lg: '1050px',
  md: '750px',
  xl: '1250px',
  '2xl': '1400px',
});

export const theme = extendTheme({
  fonts: {
    body: "'Carter One', Cursive",
    heading: "'Carter One', Cursive",
    mono: "'Carter One', Cursive",
  },
  breakPoints,
});
