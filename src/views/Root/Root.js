import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import GlobalStyle from '../../components/theme/GlobalStyle';
import { theme } from '../../components/theme/mainTheme';

const Root = () => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>Hello Konrad</h1>
        <Button>Close / save</Button>
        <Button secondary>Remove</Button>
      </>
    </ThemeProvider>
  </>
);

export default Root;
