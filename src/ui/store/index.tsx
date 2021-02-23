import React, {
  Dispatch,
  createContext,
  useReducer,
  useContext,
} from 'react';
import { rootReducer, State, Action } from './root.reducer';

const initialState: State = {
  projects: [],
};

const StoreContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState, () => {
    return {
      projects: globalThis.__config_api__.getAll('projects'),
    };
  });
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      { children }
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
