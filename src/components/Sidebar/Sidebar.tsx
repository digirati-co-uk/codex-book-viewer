import { Container, Heading, Content, Buttons, Button} from './Sidebar.styles';
import { useTranslation } from 'react-i18next';
import { ReactElement } from 'react';
import { useGridContext, useGridState } from '../Grid/Grid.context';
import { ChevronLeft, ChevronDoubleLeft, ChevronRight, ChevronDoubleRight} from '@styled-icons/heroicons-solid';
interface SidebarProps {
  children: ReactElement;
}

export function Sidebar({ children }: SidebarProps) {
  const { t } = useTranslation();
  const gridActions = useGridContext();
  const gridState = useGridState();


  return (
    <Container>
      <Heading>{t('Page Thumbnails')}</Heading>
      <Content>{children}</Content>
      <Buttons>
        {gridState.open ? (
          <Button
            onClick={() => {
              gridActions.closeLeftPanel();
              gridActions.minimiseLeftPanel();
            }}
          >
            <ChevronLeft />
          </Button>
        ) : (
          <Button
            onClick={() => {
              gridActions.openLeftPanel();
            }}
          >
            <ChevronRight />
          </Button>
        )}

        {gridState.expanded ? (
          <Button
            onClick={() => {
              gridActions.minimiseLeftPanel();
            }}
          >
            <ChevronDoubleLeft />
          </Button>
        ) : (
          <Button
            onClick={() => {
              gridActions.openLeftPanel();
              gridActions.expandLeftPanel();
            }}
          >
            <ChevronDoubleRight />
          </Button>
        )}
      </Buttons>
    </Container>
  );
}
