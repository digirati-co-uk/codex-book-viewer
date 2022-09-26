import { Container, Layout, Zoom, LayoutBtn, Icon, IconButton, Divider, ZoomBtn } from "./Actions.styles";
import { useState } from 'react';
import { Printer } from '@styled-icons/feather/Printer';
import { QuoteAltLeft } from '@styled-icons/boxicons-solid/QuoteAltLeft';
import { ZoomIn, ZoomOut } from '@styled-icons/bootstrap';
import { ZoomOutMap } from '@styled-icons/material-sharp/ZoomOutMap';

interface ActionsProps {
  onLayout(s: string): void;
  onZoomIn(): void;
  onZoomOut(): void;
  onReset(): void;
  paging: boolean;
}
export function Actions(props: ActionsProps) {

  return (
    <Container>
      <Layout>
        <LayoutBtn
          $selected={props.paging ? '2' : '1'}
          $id={'1'}
          onClick={() => {
            props.onLayout('1');
          }}
        >
          <Icon />
        </LayoutBtn>
        <LayoutBtn
          $selected={props.paging ? '2' : '1'}
          $id={'2'}
          onClick={() => {
            props.onLayout('2');
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
    </Container>
  );
}
