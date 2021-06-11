import React from 'react';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

let theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%',
          width: '100%',
          fontSize: '62.5%',
        },
        body: {
          height: '100%',
          width: '100%',
        },
      },
    },
  },
  typography: {
    htmlFontSize: 10,
  },
});
theme = responsiveFontSizes(theme);

export default function CustomResponsiveFontSizes({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
