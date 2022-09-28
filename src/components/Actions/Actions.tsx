import { Container, Layout, Zoom, LayoutBtn, Icon, Divider, ZoomBtn } from './Actions.styles';
import { ZoomIn } from '@styled-icons/bootstrap/ZoomIn';
import { ZoomOut } from '@styled-icons/bootstrap/ZoomOut';
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
