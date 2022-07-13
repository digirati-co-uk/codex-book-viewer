import { Container, Layout, Zoom, LayoutBtn, Icon, IconButton } from "./Actions.styles";
import { useState } from 'react';
import { Printer } from '@styled-icons/feather/Printer';
import { QuoteAltLeft } from '@styled-icons/boxicons-solid/QuoteAltLeft';

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

      <Zoom>+ - </Zoom>

      <IconButton>
        <Printer />
      </IconButton>

      <IconButton>
        <QuoteAltLeft />
      </IconButton>
    </Container>
  );
}
