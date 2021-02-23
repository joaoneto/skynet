import { ProjectsRepo } from '@/data/repos';
import { ProjectModel } from '@/data/models';

export interface ProjectsService {
  getAll(): Promise<ProjectModel[]>;
  getById(id: string): Promise<ProjectModel>;
  save(project: ProjectModel): Promise<void>;
}

export interface ProjectsServiceFactory {
  (projectsRepo: ProjectsRepo): ProjectsService;
}

export const ProjectsServiceFactory: ProjectsServiceFactory = (
  projectsRepo,
) => {
  const projectsService: ProjectsService = {
    async getAll() {
      return projectsRepo.getAll();
    },

    async getById(id) {
      return projectsRepo.getById(id);
    },

    async save(project) {
      const prevProject = await projectsService.getById(project.id);
      projectsRepo.save({ ...prevProject, ...project });
    },
  };

  return projectsService;
};
