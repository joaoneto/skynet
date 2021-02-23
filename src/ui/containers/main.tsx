import React from 'react';
import styled from 'styled-components';

const MainContainerStyled = styled.div`
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

export default function MainContainer({ children }) {
  return (
    <MainContainerStyled>
      {children}
    </MainContainerStyled>
  );
}
