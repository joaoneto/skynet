import React from 'react';
import styled from 'styled-components';

const AppContainerStyled = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.primary};
  position: relative;
  overflow: hidden;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

export default function AppContainer({ children }) {
  return (
    <AppContainerStyled>
      {children}
    </AppContainerStyled>
  );
}
