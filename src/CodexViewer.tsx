import { Grid } from './components/Grid/Grid';
import { Sidebar } from './components/Sidebar/Sidebar';
import { CanvasContext, useCanvas, useExternalManifest, useExternalResource, VaultProvider } from "react-iiif-vault";
import { ThumbnailPagedList } from './components/ThumbnailPagedList/ThumbnailPagedList';
import { MainProvider } from './components/MainProvider/MainProvider';
import { DeepZoomViewer, DeepZoomViewerRef } from "./components/DeepZoomViewer/DeepZoomViewer";
import { Actions } from './components/Actions/Actions';
import { useState, useRef } from 'react';
import { getValue } from '@iiif/vault-helpers/i18n';

export interface CodexViewerProps {
  manifest: string;
  canvasId: string;
  book: string;
}

export function CodexViewer(props: CodexViewerProps) {
  const zoom_ref = useRef<DeepZoomViewerRef>(null);
  const [paging, setPaging] = useState(true);

  const handleLayout = (x: string) => {
    x === '1' ? setPaging(false) : setPaging(true);
  };
  return (
    <VaultProvider>
      <MainProvider manifest={props.manifest} paging={paging} book={props.book}>
        <Grid
          sidebar={
            <Sidebar>
              <ThumbnailPagedList />
            </Sidebar>
          }
          actions={
            <Actions
              paging={paging}
              onLayout={(x) => {
                handleLayout(x);
              }}
              onZoomIn={() => {
                zoom_ref.current?.startZoom(0.75);
              }}
              onZoomOut={() => {
                zoom_ref.current?.startZoom(1 / 0.75);
              }}
              onReset={() => {
                zoom_ref.current?.resetZoom();
              }}
            />
          }
        >
          <DeepZoomViewer ref={zoom_ref} initCanvas={props.canvasId} />
        </Grid>
      </MainProvider>
    </VaultProvider>
  );
}
