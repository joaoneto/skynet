import { projectsService } from '@/factories/services';
import { GetProjectUseCaseFactory } from '@/data/usecases';

export const getProjectUseCase = GetProjectUseCaseFactory(projectsService);
