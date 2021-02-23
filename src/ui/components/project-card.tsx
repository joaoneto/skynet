import React from 'react';
import styled from 'styled-components';

const CARD_BASIS = 72;

const ProjectCardStyled = styled.div`
  flex: 0 0 ${CARD_BASIS}px;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[3]};
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 4px;

  &:not(:first-child) {
    margin-top: 0;
  }

  ${({ spacing, theme }) => (
    spacing
      ? `margin: ${theme.spacing[spacing]};`
      : `margin: ${theme.spacing[1]};`
  )}
`;

const ProjectCardName = styled.div`
  flex: 1;
`;

export default function ProjectCard({ project }) {
  return (
    <ProjectCardStyled>
      <ProjectCardName>{project.name}</ProjectCardName>
    </ProjectCardStyled>
  );
}
