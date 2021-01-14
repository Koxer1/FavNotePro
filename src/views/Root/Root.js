import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input/Input';
import Heading from '../../components/atoms/Heading/Heading';
import Paragraph from '../../components/atoms/Paragraph/Paragraph';
import ButtonIcon from '../../components/atoms/ButtonIcon/ButtonIcon';
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
        <Input search placeholder='Szukaj' />
        <Input placeholder='Input' />
        <Heading>This is a normal Heading</Heading>
        <Heading big>This is a big Heading</Heading>
        <Paragraph>This is a paragraph</Paragraph>
        <ButtonIcon />
      </>
    </ThemeProvider>
  </>
);

export default Root;
