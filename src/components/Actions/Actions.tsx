import { Container, Layout, Zoom, LayoutBtn, Icon, Divider, ZoomBtn } from './Actions.styles';
import { PlusIcon } from '../../icons/PlusIcon'
import { MinusIcon } from '../../icons/MinusIcon'
import { HomeIcon } from '../../icons/HomeIcon'
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
          <PlusIcon />
        </ZoomBtn>

        <ZoomBtn
          title={'Reset view'}
          onClick={() => {
            props.onReset();
          }}
        >
          <HomeIcon />
        </ZoomBtn>

        <ZoomBtn
          title={'Zoom out'}
          onClick={() => {
            props.onZoomOut();
          }}
        >
          <MinusIcon />
        </ZoomBtn>
      </Zoom>
    </Container>
  );
}
