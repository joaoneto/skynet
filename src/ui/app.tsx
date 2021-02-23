import React from 'react';
import { ThemeProvider } from 'styled-components';

import { StoreProvider } from '@/ui/store';

import ResetCSS from '@/ui/components/reset-css';

import MainContainer from '@/ui/containers/main';
import ProjectsContainer from '@/ui/containers/projects';
import ConsoleContainer from '@/ui/containers/console';

import theme from '@/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResetCSS />
      <StoreProvider>
        <MainContainer>
          <ProjectsContainer />
          <ConsoleContainer />
        </MainContainer>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
