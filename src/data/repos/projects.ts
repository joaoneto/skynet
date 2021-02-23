const configApi = globalThis.__config_api__;

export interface ProjectsRepo {
  getAll<T>(): Promise<T[]>;
  getById<T>(id: string): Promise<T>;
  save<T>(project: T): Promise<void>;
}

export interface ProjectsRepoFactory {
  (): ProjectsRepo;
}

const COLLECTION = 'projects';

export const ProjectsRepoFactory: ProjectsRepoFactory = (): ProjectsRepo => {
  return {
    async getAll() {
      return configApi.getAll(COLLECTION);
    },

    async getById(id) {
      return configApi.findById(COLLECTION, id);
    },

    async save(project) {
      await configApi.save(project, COLLECTION);
    },
  };
};
