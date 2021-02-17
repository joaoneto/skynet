import React from 'react';
import styled from 'styled-components';

const ProjectListStyled = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
  min-width: 320px;
`;

export default function ProjectCard({ children }) {
  return (
    <ProjectListStyled>
      {children}
    </ProjectListStyled>
  );
}
