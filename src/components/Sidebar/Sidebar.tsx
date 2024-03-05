import { Container, Heading, Content, Buttons, Button } from './Sidebar.styles';
import { useTranslation } from 'react-i18next';
import { ReactElement } from 'react';
import { useGridContext, useGridState } from '../Grid/Grid.context';
import { ChevronLeftIcon } from '../../icons/ChevronLeftIcon';
import { ChevronRightIcon } from '../../icons/ChevronRightIcon';
import { useIsMobile } from '../../hooks/useIsMobile';

interface SidebarProps {
  children: ReactElement;
}

function GridView() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z" />
    </svg>
  );
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
              <ChevronRightIcon />
            </Button>
          ) : (
            <Button
              title="open panel"
              onClick={() => {
                gridActions.openLeftPanel();
              }}
            >
              <ChevronLeftIcon />
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
