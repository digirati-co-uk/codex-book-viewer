import { Container, Heading, Content } from './Sidebar.styles';
import { useTranslation } from 'react-i18next';
import { ReactElement } from 'react';

interface SidebarProps {
  children: ReactElement;
}

export function Sidebar({ children }: SidebarProps) {
  const { t } = useTranslation();

  return (
    <Container>
      <Heading>{t('Page Thumbnails')}</Heading>
      <Content>{children}</Content>
    </Container>
  );
}
