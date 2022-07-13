import { Container, Heading, Content, Buttons, Button, Close, Open, Minimise, Expand } from './Sidebar.styles';
import { useTranslation } from 'react-i18next';
import { ReactElement } from 'react';
import { useGridContext, useGridState } from '../Grid/Grid.context';

interface SidebarProps {
  children: ReactElement;
}

export function Sidebar({ children }: SidebarProps) {
  const { t } = useTranslation();
  const gridActions = useGridContext();
  const gridState = useGridState();
  console.log(gridState);

  return (
    <Container>
      <Heading>{t('Page Thumbnails')}</Heading>
      <Content>{children}</Content>
      <Buttons>
        {gridState.open ? (
          <Button
            onClick={() => {
              gridActions.closeLeftPanel();
            }}
          >
            <Close />
          </Button>
        ) : (
          <Button
            onClick={() => {
              gridActions.openLeftPanel();
            }}
          >
            <Open />
          </Button>
        )}

        {gridState.expanded ? (
          <Button
            onClick={() => {
              gridActions.minimiseLeftPanel();
            }}
          >
            <Minimise />
          </Button>
        ) : (
          <Button
            onClick={() => {
              gridActions.expandLeftPanel();
            }}
          >
            <Expand />
          </Button>
        )}
      </Buttons>
    </Container>
  );
}
