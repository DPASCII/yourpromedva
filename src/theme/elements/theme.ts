import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '20, 40, 59',
    secondary: '3, 63 , 99',
    hoverBackground: '3, 63, 99',
    button: '204, 144, 12',
    buttonText: '0, 0, 0',
    buttonHover: '178, 116, 4',
    buttonHoverText: '0, 0, 0',
    text: '255, 255, 255',
    secondaryText: '255, 255, 255',
  },
  windowWidth: 1320,
  breakpoints: { desktop: 1320, tablet: 768, mobile: 375 },
};

export default theme;
