import { AtlasContainer, Container, Heading } from './DeepZoomViewer.styles';
import { CanvasContext, ContextBridge, useContextBridge, useVisibleCanvases } from 'react-iiif-vault';
import { ViewerControls } from '../ViewerControls/ViewerControls';
import { blackBg2 } from '../../tokens';
import { forwardRef, useImperativeHandle, useLayoutEffect, useRef } from "react";
import { AtlasAuto, Runtime } from '@atlas-viewer/atlas';
import { AtlasCanvas } from '../../atlas-components/AtlasCanvas';
import { VirtualAnnotationProvider } from '../../hooks/use-virtual-annotation-page-context';

interface DeepZoomViewerProps {
  initCanvas: number;
}
export const DeepZoomViewer = forwardRef((props: DeepZoomViewerProps, ref) => {
  const bridge = useContextBridge();
  const runtime = useRef<Runtime>();
  const canvases = useVisibleCanvases();

  useImperativeHandle(ref, () => ({
    startZoom(v) {
      v && runtime.current?.world.zoomTo(v);
    },
    resetZoom() {
      runtime.current?.world.goHome();
    },
  }));

  let acc = 0;
  const canvasComponents = canvases.map((canvas) => {
    const x = acc;
    acc += canvas.width;

    return (
      <CanvasContext key={canvas.id} canvas={canvas.id}>
        <AtlasCanvas key={canvas.id} x={x} />
      </CanvasContext>
    );
  });

  return (
    <Container>
      <Heading>Book 11 - book title</Heading>
      <ViewerControls initCanvas={props.initCanvas} />
      <style>{`
        .atlas-container {
          min-width: 0; 
          --atlas-container-flex: 1 1 0px;
          --atlas-background:  ${blackBg2};
        }
      `}</style>

      <AtlasContainer>
        <AtlasAuto onCreated={(preset) => void (runtime.current = preset.runtime)}>
          <ContextBridge bridge={bridge}>
            <VirtualAnnotationProvider>{canvasComponents}</VirtualAnnotationProvider>
          </ContextBridge>
        </AtlasAuto>
      </AtlasContainer>
    </Container>
  );
});
