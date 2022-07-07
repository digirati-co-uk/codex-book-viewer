import { createContext, useContext } from 'react';

export type GridContext =
  | {
      openLeftPanel: () => void;
      closeLeftPanel: () => void;
      toggleLeftPanel: () => void;
      expandLeftPanel: () => void;
      minimiseLeftPanel: () => void;
    }
  | undefined;

export interface GridState {
  open: boolean;
  expanded: boolean;
}

export const GridStateReactContext = createContext<GridState>({
  open: true,
  expanded: false,
});

export const GridReactContext = createContext<GridContext>(undefined);

export function useGridContext() {
  const ctx = useContext(GridReactContext);

  if (!ctx) {
    throw new Error('Must be called from provider');
  }

  return ctx;
}

export function useGridState() {
  return useContext(GridStateReactContext);
}
