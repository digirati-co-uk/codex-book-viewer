import { Grid } from './components/Grid/Grid';
import { Sidebar } from './components/Sidebar/Sidebar';
import { useExternalManifest, VaultProvider } from "react-iiif-vault";
import { ThumbnailPagedList } from './components/ThumbnailPagedList/ThumbnailPagedList';
import { MainProvider } from './components/MainProvider/MainProvider';
import { DeepZoomViewer } from './components/DeepZoomViewer/DeepZoomViewer';
import { Actions } from './components/Actions/Actions';
import { useState, useRef } from 'react';

export interface CodexViewerProps {
  manifest: string;
  initCanvas: number;
  range: string;
}

export function CodexViewer(props: CodexViewerProps) {
  const zoom_ref = useRef(null);
  const [paging, setPaging] = useState(true);

  const handleLayout = (x: string) => {
    x === '1' ? setPaging(false) : setPaging(true);
  };
  return (
    <VaultProvider>
      <MainProvider manifest={props.manifest} paging={paging} range={props.range}>
        <Grid
          sidebar={
            <Sidebar>
              <ThumbnailPagedList />
            </Sidebar>
          }
          actions={
            <Actions
              onLayout={(x) => {
                handleLayout(x);
              }}
              onZoomIn={() => {
                zoom_ref.current.startZoom(0.75);
              }}
              onZoomOut={() => {
                zoom_ref.current.startZoom(1 / 0.75);
              }}
              onReset={() => {
                zoom_ref.current.resetZoom();
              }}
            />
          }
        >
          <DeepZoomViewer ref={zoom_ref} initCanvas={props.initCanvas} />
        </Grid>
      </MainProvider>
    </VaultProvider>
  );
}
