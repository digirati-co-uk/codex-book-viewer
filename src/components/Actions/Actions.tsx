import { Container, Layout, Zoom, LayoutBtn, Icon, IconButton, Divider, Slider, ZoomBtn } from './Actions.styles';
import { useState } from 'react';
import { Printer } from '@styled-icons/feather/Printer';
import { QuoteAltLeft } from '@styled-icons/boxicons-solid/QuoteAltLeft';

interface ActionsProps {
  onZoomIn(): void;
  onZoomOut(): void;
}

export function Actions(props: ActionsProps) {
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
      </Layout>

      <Divider />

      <Zoom>
        <ZoomBtn
          onClick={() => {
            props.onZoomOut();
          }}
        >
          +
        </ZoomBtn>
        <Slider type="range" min={1} max={1000} value={500}></Slider>

        <ZoomBtn
          onClick={() => {
            props.onZoomIn();
          }}
        >
          -
        </ZoomBtn>
      </Zoom>
      <Divider />
      <IconButton>
        <Printer />
      </IconButton>
      <Divider />
      <IconButton>
        <QuoteAltLeft />
      </IconButton>
    </Container>
  );
}
