import { AtlasContainer, Container, Heading } from './DeepZoomViewer.styles';
import { CanvasContext, ContextBridge, useContextBridge, useVisibleCanvases } from 'react-iiif-vault';
import { LocaleString } from '@iiif/vault-helpers/react-i18next';
import { ViewerControls } from '../ViewerControls/ViewerControls';
import { blackBg2 } from '../../tokens';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { AtlasAuto, Runtime } from '@atlas-viewer/atlas';
import { AtlasCanvas } from '../../atlas-components/AtlasCanvas';
import { VirtualAnnotationProvider } from '../../hooks/use-virtual-annotation-page-context';

export interface DeepZoomViewerRef {
  startZoom(v: number): void;
  resetZoom(): void;
}
export const DeepZoomViewer = forwardRef((DeepZoomViewerRef, ref) => {
  const bridge = useContextBridge();
  const runtime = useRef<Runtime>();
  const canvases = useVisibleCanvases();

  useImperativeHandle(ref, () => ({
    startZoom(v: number) {
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

  const metadata = canvases[0].metadata;

  const book = metadata ? metadata.findIndex((x) => x.label.en?.includes("Book")) : '';
  const bookTitle = metadata ? metadata.findIndex((x) => x.label.en?.includes("Title")) : '';
  

  return (
    <Container>
      <Heading>
        <LocaleString>{metadata[book].label}</LocaleString>
        {' '}
        <LocaleString>{metadata[book].value}</LocaleString>
        {' - '}
        <LocaleString>{metadata[bookTitle].value}</LocaleString>

      </Heading>
      <ViewerControls />
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
