import { configRepo } from '@/factories/repos';
import { ProjectsServiceFactory } from '@/data/services';

export const projectsService = ProjectsServiceFactory(configRepo);
