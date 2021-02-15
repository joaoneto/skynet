import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { StoreProvider, useStore } from '@/store';
import { loadProjects } from '@/store/projects';

import useConfig from '@/hooks/use-config';

import ResetCSS from '@/components/reset-css';
import AppContainer from '@/components/app-container';

import MainSection from '@/sections/main';
import ConsoleSection from '@/sections/console';

import theme from '@/theme';

function AppInitialization({ children = null }) {
  const [config] = useConfig();
  const { dispatch } = useStore();

  useEffect(() => {
    if (config?.projects) {
      dispatch(loadProjects(config.projects));
    }
  }, [dispatch, config]);

  return (
    <StoreProvider>
      {children}
    </StoreProvider>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResetCSS />
      <StoreProvider>
        <AppContainer>
          <AppInitialization />
          <MainSection />
          <ConsoleSection />
        </AppContainer>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
