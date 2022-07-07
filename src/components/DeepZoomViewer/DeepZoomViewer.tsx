import { AtlasContainer, Container, Heading } from './DeepZoomViewer.styles';
import { CanvasContext, ContextBridge, useContextBridge, useManifest, useVisibleCanvases } from 'react-iiif-vault';
import { getValue } from '@iiif/vault-helpers';
import { ViewerControls } from '../ViewerControls/ViewerControls';
import { blackBg, greyBg, greyBg2 } from '../../tokens';
import { AtlasAuto } from '@atlas-viewer/atlas';
import { AtlasCanvas } from '../../atlas-components/AtlasCanvas';
import { VirtualAnnotationProvider } from '../../hooks/use-virtual-annotation-page-context';
import { ReactElement, ReactNode, useEffect } from 'react';

export function DeepZoomViewer() {
  const manifest = useManifest();
  const canvases = useVisibleCanvases();

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
      <Heading>{getValue(manifest.label)}</Heading>
      <ViewerControls />
      <style>{`
        .atlas-container {
          min-width: 0; 
          --atlas-container-flex: 1 1 0px;
          --atlas-background:  ${blackBg};
        }
      `}</style>
      <AtlasContainer>
        <Viewer>{canvasComponents}</Viewer>
      </AtlasContainer>
    </Container>
  );
}

function Viewer({ children }: { children: ReactNode }) {
  const bridge = useContextBridge();

  return (
    <AtlasAuto>
      <ContextBridge bridge={bridge}>
        <VirtualAnnotationProvider>{children}</VirtualAnnotationProvider>
      </ContextBridge>
    </AtlasAuto>
  );
}
