import { Container, Layout, Zoom, LayoutBtn, Icon, Divider, ZoomBtn } from './Actions.styles';
import { ZoomIn } from '@styled-icons/bootstrap/ZoomIn';
import { ZoomOut } from '@styled-icons/bootstrap/ZoomOut';
import { Plus } from '@styled-icons/fa-solid/Plus';
import { Minus } from '@styled-icons/fa-solid/Minus'
import { Home } from '@styled-icons/material/Home'
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
          title={'Single page'}
          $selected={props.paging ? '2' : '1'}
          $id={'1'}
          onClick={() => {
            props.onLayout('1');
          }}
        >
          <Icon />
        </LayoutBtn>
        <LayoutBtn
          title={'Spread'}
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
          title={'Zoom in'}
          onClick={() => {
            props.onZoomIn();
          }}
        >
          <Plus />
        </ZoomBtn>

        <ZoomBtn
          title={'Reset view'}
          onClick={() => {
            props.onReset();
          }}
        >
          <Home />
        </ZoomBtn>

        <ZoomBtn
          title={'Zoom out'}
          onClick={() => {
            props.onZoomOut();
          }}
        >
          <Minus />
        </ZoomBtn>
      </Zoom>
    </Container>
  );
}
