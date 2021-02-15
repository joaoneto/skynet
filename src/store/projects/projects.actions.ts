import { ProjectModel } from '@/data/models';

export enum ActionsTypes {
  LOAD_PROJECTS = 'LOAD_PROJECTS',
  ADD_PROJECT = 'ADD_PROJECT',
}

export type LoadProjectAction = {
  type: ActionsTypes.LOAD_PROJECTS;
  payload: ProjectModel[];
};

export type AddProjectAction = {
  type: ActionsTypes.ADD_PROJECT;
  payload: ProjectModel;
};

export type ProjectAction =
  | LoadProjectAction
  | AddProjectAction;

export const loadProjects = (payload: ProjectModel[]): LoadProjectAction => {
  return {
    type: ActionsTypes.LOAD_PROJECTS,
    payload,
  };
};

export const addProject = (payload: ProjectModel) => {
  return {
    type: ActionsTypes.ADD_PROJECT,
    payload,
  };
};
