import { ReactElement, Reducer, useMemo, useReducer } from 'react';
import { Main, Sidebar, Container, Actions } from './Grid.styles';
import { GridContext, GridReactContext, GridStateReactContext } from './Grid.context';

type GridProps = {
  sidebar: ReactElement;
  children: ReactElement;
  actions: ReactElement;
};

const toggle: Reducer<boolean, boolean | undefined> = (a, b = !a) => b;

export function Grid(props: GridProps) {
  const [expanded, setExpanded] = useReducer(toggle, false);
  const [open, setOpen] = useReducer(toggle, true);

  const value = useMemo(() => {
    return {
      closeLeftPanel: () => setOpen(false),
      openLeftPanel: () => setOpen(true),
      toggleLeftPanel: () => setOpen(undefined),
      expandLeftPanel: () => setExpanded(true),
      minimiseLeftPanel: () => setExpanded(false),
    } as GridContext;
  }, []);

  console.log(expanded);

  return (
    <GridReactContext.Provider value={value}>
      <GridStateReactContext.Provider value={useMemo(() => ({ open, expanded }), [open, expanded])}>
        <Container>
          <Sidebar $expanded={expanded} $open={open}>
            {props.sidebar}
          </Sidebar>
          <Main>{props.children}</Main>
          <Actions>{props.actions}</Actions>
        </Container>
      </GridStateReactContext.Provider>
    </GridReactContext.Provider>
  );
}
