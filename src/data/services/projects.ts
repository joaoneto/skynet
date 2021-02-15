import * as config from '@/lib/config';

export type ProjectsService = {
  getAll(): [];
};

export type ProjectsServiceFactory = () => ProjectsService;

export const ProjectService: ProjectsServiceFactory = () => {
  return {
    getAll() {
      return [];
    },
  };
};
