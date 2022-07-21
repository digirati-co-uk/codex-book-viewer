import { Container, Layout, Zoom, LayoutBtn, Icon, IconButton, Divider, ZoomBtn } from './Actions.styles';
import { useState } from 'react';
import { Printer } from '@styled-icons/feather/Printer';
import { QuoteAltLeft } from '@styled-icons/boxicons-solid/QuoteAltLeft';
import { ZoomIn, ZoomOut} from '@styled-icons/bootstrap';
import { ZoomOutMap } from '@styled-icons/material-sharp/ZoomOutMap';

interface ActionsProps {
  onZoomIn(): void;
  onZoomOut(): void;
  onReset(): void;
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
            props.onZoomIn();
          }}
        >
          <ZoomIn />
        </ZoomBtn>

        <ZoomBtn
          onClick={() => {
            props.onReset();
          }}
        >
          <ZoomOutMap />
        </ZoomBtn>

        <ZoomBtn
          onClick={() => {
            props.onZoomOut();
          }}
        >
          <ZoomOut />
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
