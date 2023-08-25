import { Container, Heading, Content, Buttons, Button } from './Sidebar.styles';
import { useTranslation } from 'react-i18next';
import { ReactElement } from 'react';
import { useGridContext, useGridState } from '../Grid/Grid.context';
import { ChevronLeft } from '@styled-icons/heroicons-solid/ChevronLeft';
import { ChevronRight } from '@styled-icons/heroicons-solid/ChevronRight';
import { useIsMobile } from '../../hooks/useIsMobile';
import { GridView } from '@styled-icons/material-rounded/GridView';

interface SidebarProps {
  children: ReactElement;
}

export function Sidebar({ children }: SidebarProps) {
  const { t } = useTranslation();
  const gridActions = useGridContext();
  const gridState = useGridState();
  const mobile = useIsMobile(500);

  return (
    <Container>
      <Heading>{t('Page Thumbnails')}</Heading>
      <Content>{children}</Content>
      <Buttons>
        {!mobile &&
          (gridState.open ? (
            <Button
              title="close panel"
              onClick={() => {
                gridActions.minimiseLeftPanel();
                gridActions.closeLeftPanel();
              }}
            >
              <ChevronLeft />
            </Button>
          ) : (
            <Button
              title="open panel"
              onClick={() => {
                gridActions.openLeftPanel();
              }}
            >
              <ChevronRight />
            </Button>
          ))}

        {gridState.expanded ? (
          mobile ? (
            <Button
              onClick={() => {
                gridActions.minimiseLeftPanel();
                gridActions.closeLeftPanel();
              }}
            >
              <GridView />
            </Button>
          ) : (
            <Button
              title="page view"
              onClick={() => {
                gridActions.minimiseLeftPanel();
              }}
            >
              <GridView />
            </Button>
          )
        ) : (
          <Button
            title="grid view"
            onClick={() => {
              gridActions.openLeftPanel();
              gridActions.expandLeftPanel();
            }}
          >
            <GridView />
          </Button>
        )}
      </Buttons>
    </Container>
  );
}
