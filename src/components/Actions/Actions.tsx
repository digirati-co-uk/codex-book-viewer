import { Container, Layout, Zoom, LayoutBtn, Icon, IconButton, Divider, Slider } from './Actions.styles';
import { useState } from 'react';
import { Printer } from '@styled-icons/feather/Printer';
import { QuoteAltLeft } from '@styled-icons/boxicons-solid/QuoteAltLeft';

interface ActionsProps {
  onLayout(s: string): void;
}
export function Actions(props: ActionsProps) {
  const [selected, setSelected] = useState('2');
  const [zoom, setZoom] = useState(1);

  return (
    <Container>
      <Layout>
        <LayoutBtn
          selected={selected}
          id={'1'}
          onClick={() => {
            props.onLayout('1');
            setSelected('1');
          }}
        >
          <Icon />
        </LayoutBtn>
        <LayoutBtn
          selected={selected}
          id={'2'}
          onClick={() => {
            props.onLayout('2');
            setSelected('2');
          }}
        >
          <Icon /> <Icon />
        </LayoutBtn>
      </Layout>

      <Divider />

      <Zoom>
        +<Slider type="range" min={1} max={100} value={zoom} onChange={(e) => setZoom(e.target.value)}></Slider>-
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
