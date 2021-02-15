import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import ResetCSS from './components/reset-css';
import AppContainer from './components/app-container';
import Console from './components/console';

import MainSection from './sections/main';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResetCSS />
      <AppContainer>
        <MainSection />
        <Console />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
