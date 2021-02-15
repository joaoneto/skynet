import {
  projectsReducer,
  ProjectAction,
  ProjectState,
} from './projects';

export interface State {
  projects: ProjectState;
}

export type Action = ProjectAction;

export const rootReducer = (state: State, action: Action): State => ({
  projects: projectsReducer(state.projects, action),
});
