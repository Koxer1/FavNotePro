import { ThemeProvider } from 'styled-components';
// import GlobalStyle from '../src/components/theme/GlobalStyle';
import { theme } from '../src/components/theme/mainTheme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
