import { Container, Layout, Zoom, LayoutBtn, Icon, IconButton, Divider, Slider } from './Actions.styles';
import { useState } from "react";
import { Printer } from '@styled-icons/feather/Printer';
import { QuoteAltLeft } from '@styled-icons/boxicons-solid/QuoteAltLeft';

interface ActionsProps {
  zoom: string;
  onZoom: (arg: string) => void;
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

      <Divider />

      <Zoom>
        +
        <Slider
          type="range"
          min={1}
          max={100}
          value={props.zoom}
          onChange={(e) => props.onZoom(e.target.value)}
        ></Slider>
        -
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
