import { Container, Heading, Content, Buttons, Button } from './Sidebar.styles';
import { useTranslation } from 'react-i18next';
import { ReactElement } from 'react';
import { useGridContext, useGridState } from '../Grid/Grid.context';
import { ChevronLeft } from '@styled-icons/heroicons-solid/ChevronLeft';
import { ChevronDoubleLeft } from '@styled-icons/heroicons-solid/ChevronDoubleLeft';
import { ChevronRight } from '@styled-icons/heroicons-solid/ChevronRight';
import { ChevronDoubleRight } from '@styled-icons/heroicons-solid/ChevronDoubleRight';
import { useIsMobile } from '../../hooks/useIsMobile';

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
              onClick={() => {
                gridActions.minimiseLeftPanel();
                gridActions.closeLeftPanel();
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
          ))}

        {gridState.expanded ? (
          mobile ? (
            <Button
              onClick={() => {
                gridActions.minimiseLeftPanel();
                gridActions.closeLeftPanel();
              }}
            >
              <ChevronDoubleLeft />
            </Button>
          ) : (
            <Button
              onClick={() => {
                gridActions.minimiseLeftPanel();
              }}
            >
              <ChevronDoubleLeft />
            </Button>
          )
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
