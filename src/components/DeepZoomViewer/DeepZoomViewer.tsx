import { AtlasContainer, Container, Heading } from './DeepZoomViewer.styles';
import { CanvasContext, ContextBridge, useContextBridge, useExternalResource, useVisibleCanvases } from 'react-iiif-vault';
import { LocaleString } from '@iiif/vault-helpers/react-i18next';
import { ViewerControls } from '../ViewerControls/ViewerControls';
import { blackBg2 } from '../../tokens';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { AtlasAuto, Runtime } from '@atlas-viewer/atlas';
import { AtlasCanvas } from '../../atlas-components/AtlasCanvas';
import { VirtualAnnotationProvider } from '../../hooks/use-virtual-annotation-page-context';
import { getValue } from '@iiif/vault-helpers/i18n';

interface DeepZoomViewerProps {
  initCanvas: string;
}

export interface DeepZoomViewerRef {
  startZoom(v: number): void;
  resetZoom(): void;
}

export const DeepZoomViewer = forwardRef<DeepZoomViewerRef, DeepZoomViewerProps>((props: DeepZoomViewerProps, ref) => {
  const bridge = useContextBridge();
  const runtime = useRef<Runtime>();
  const canvases = useVisibleCanvases();
  const {resource, isLoaded } = useExternalResource(props.initCanvas);
  // @ts-ignore
  const canvasInfo = isLoaded && resource ? resource.metadata : {};
  const volumeKey = canvasInfo.find((x: { label: { en: string | string[]; }; }) => x.label.en.includes('Volume Key'));

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

  return (
    <Container>
      <Heading>
        <LocaleString>{canvases[0].metadata[1].label}</LocaleString>
        {' '}
        <LocaleString>{canvases[0].metadata[1].value}</LocaleString>
        {' '}
        <LocaleString>{canvases[0].label}</LocaleString>
      </Heading>
      <ViewerControls initCanvas={Number(getValue(volumeKey.value))} />
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
