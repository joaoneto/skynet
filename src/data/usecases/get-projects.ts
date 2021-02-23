import { ProjectModel } from '@/data/models';
import { ProjectsService } from '@/data/services';

export interface GetProjectUseCase {
  (): Promise<ProjectModel[]>;
}

export interface GetProjectUseCaseFactory {
  (projectsService: ProjectsService): GetProjectUseCase;
}

export const GetProjectUseCaseFactory: GetProjectUseCaseFactory = (
  projectsService,
): GetProjectUseCase => {
  return () => {
    return projectsService.getAll();
  };
};
