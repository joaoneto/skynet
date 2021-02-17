import React from 'react';
import { ThemeProvider } from 'styled-components';

import { StoreProvider } from '@/ui/store';

import ResetCSS from '@/ui/components/reset-css';
import AppContainer from '@/ui/components/app-container';

import MainSection from '@/ui/containers/main';
import ConsoleSection from '@/ui/containers/console';

import theme from '@/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResetCSS />
      <StoreProvider>
        <AppContainer>
          <MainSection />
          <ConsoleSection />
        </AppContainer>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
