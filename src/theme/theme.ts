import { createTheme } from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: 'white',

  borderTextInput: '#828282',
  blurEffect: 'rgba(0, 0, 0, 0.3)',
  red: 'red',

  darkBlue: '#233755',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    purpleLight: palette.purpleLight,
    purplePrimary: palette.purplePrimary,
    purpleDark: palette.purpleDark,
    greenLight: palette.greenLight,
    greenPrimary: palette.greenPrimary,
    greenDark: palette.greenDark,
    black: palette.black,
    white: palette.white,
    borderTextInput: palette.borderTextInput,
    blurEffect: palette.blurEffect,
    red: palette.red,
    darkBlue: palette.darkBlue,
  },
  spacing: {
    n: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    longPhone: {
      width: 0,
      height: 812,
    },
    tablet: 768,
    largeTablet: 1024,
  },
  textVariants: {
    header: {
      fontWeight: '700',
      fontSize: 28,
      lineHeight: 32,
      color: 'black',
    },
    subheader: {
      fontWeight: '700',
      fontSize: 24,
      lineHeight: 28,
      color: 'black',
    },
    subtitle: {
      fontWeight: '500',
      fontSize: 18,
      lineHeight: 28,
      color: 'black',
    },
    body: {
      fontWeight: '300',
      fontSize: 15,
      lineHeight: 24,
      color: 'black',
    },
    small: {
      fontSize: 12,
      lineHeight: 18,
      color: 'black',
    },
  },
});

export type Theme = typeof theme;
export default theme;
