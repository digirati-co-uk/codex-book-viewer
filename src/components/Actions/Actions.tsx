import { Container, Layout, Zoom, Print, Cite, LayoutBtn, Icon } from './Actions.styles';
import { useState } from 'react';

export function Actions() {
  const [selected, setSelected] = useState('1');

  return (
    <Container>
      <Layout>
        <LayoutBtn
          selected={selected}
          id={'1'}
          onClick={() => {
            setSelected('1');
          }}
        >
          <Icon />
        </LayoutBtn>
        <LayoutBtn
          selected={selected}
          id={'2'}
          onClick={() => {
            setSelected('2');
          }}
        >
          <Icon /> <Icon />
        </LayoutBtn>
        <LayoutBtn
          selected={selected}
          id={'3'}
          onClick={() => {
            setSelected('3');
          }}
        >
          <Icon /> <Icon /> <Icon /> <Icon />
        </LayoutBtn>
      </Layout>

      <Zoom>Zoom</Zoom>
      <Print>Print</Print>
      <Cite>Cite</Cite>
    </Container>
  );
}
