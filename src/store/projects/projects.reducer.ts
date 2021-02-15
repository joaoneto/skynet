import { ProjectModel } from '@/data/models';
import { ActionsTypes, ProjectAction } from './projects.actions';

export type ProjectState = ProjectModel[];

const initialState: ProjectState = [];

export const projectsReducer = (state = initialState, action: ProjectAction): ProjectState => {
  switch (action.type) {
    case ActionsTypes.LOAD_PROJECTS: {
      console.log('projectsReducer LOAD_PROJECTS', action);
      return [
        ...state,
        ...action.payload,
      ];
    }
    case ActionsTypes.ADD_PROJECT:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};
