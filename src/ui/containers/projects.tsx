import React from 'react';

import { useStore } from '@/ui/store';

import ProjectList from '@/ui/components/project-list';
import ProjectCard from '@/ui/components/project-card';

function ProjectsContainer() {
  const { state } = useStore();

  if (!state.projects) {
    // loading
    return null;
  }

  return (
    <ProjectList>
      {state.projects.map((project) => {
        return (
          <ProjectCard
            key={project.id}
            project={project}
          />
        );
      })}
    </ProjectList>
  );
}

export default ProjectsContainer;
