import { AtlasContainer, Container, Heading } from "./DeepZoomViewer.styles";
import { CanvasContext, ContextBridge, useContextBridge, useVisibleCanvases } from "react-iiif-vault";
import { ViewerControls } from "../ViewerControls/ViewerControls";
import { blackBg2 } from "../../tokens";
import { AtlasAuto, Runtime } from "@atlas-viewer/atlas";
import { AtlasCanvas } from "../../atlas-components/AtlasCanvas";
import { VirtualAnnotationProvider } from "../../hooks/use-virtual-annotation-page-context";
import { ReactNode, useRef } from "react";

interface DeepZoomViewerProps {
  initCanvas: number;
}

export function DeepZoomViewer(props: DeepZoomViewerProps) {
  const runtime = useRef<Runtime>();
  const canvases = useVisibleCanvases();
  const doZoomIn = () => runtime.current?.world.zoomTo(0.75);
  const doZoomOut = () => runtime.current?.world.zoomTo(1 / 0.75);

  let acc = 0;
  const canvasComponents = canvases.map((canvas) => {
    const x = acc;
    acc += canvas.width;

    return (
      <CanvasContext key={canvas.id} canvas={canvas.id}>
        <AtlasCanvas key={canvas.id} x={x} onCreated={(preset) => void (runtime.current = preset.runtime)} />
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
        <Viewer>{canvasComponents}</Viewer>
        <button onClick={doZoomOut}>zoom in</button>
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
