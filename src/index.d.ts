export {};
declare global {
  interface Window {
    api: {
      getProjects: () => Promise<any[]>;
      addProject: () => Promise<void>;
      updateProject: () => Promise<void>;
    };
  }
}
