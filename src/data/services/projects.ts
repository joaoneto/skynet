import { ConfigRepo } from '@/data/repos';
import { ProjectModel } from '@/data/models';

export interface ProjectsService {
  getAll(): ProjectModel[];
  getById(id: string): ProjectModel;
  save(project): Promise<void>;
}

export interface ProjectsServiceFactory {
  (configRepo: ConfigRepo): ProjectsService;
}

export const ProjectsServiceFactory: ProjectsServiceFactory = (
  configRepo,
): ProjectsService => {
  return {
    getAll() {
      return configRepo.get('projects');
    },

    getById(id) {
      return this.getAll().find((project) => project.id === id);
    },

    async save(project) {
      const prevProject = this.getById(project.id);
      configRepo.save([
        { ...prevProject, ...project },
      ], 'projects');
    },
  };
};
