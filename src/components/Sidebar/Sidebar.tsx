import { Container, Heading, Content, Buttons, Button } from './Sidebar.styles';
import { useTranslation } from 'react-i18next';
import { ReactElement, useEffect } from 'react';
import { useGridContext, useGridState } from '../Grid/Grid.context';
import { ChevronLeft, ChevronDoubleLeft, ChevronRight, ChevronDoubleRight } from '@styled-icons/heroicons-solid';
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
