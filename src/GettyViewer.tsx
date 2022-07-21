import { Grid } from './components/Grid/Grid';
import { Sidebar } from './components/Sidebar/Sidebar';
import { VaultProvider } from 'react-iiif-vault';
import { ThumbnailPagedList } from './components/ThumbnailPagedList/ThumbnailPagedList';
import { MainProvider } from './components/MainProvider/MainProvider';
import { DeepZoomViewer } from './components/DeepZoomViewer/DeepZoomViewer';
import { Actions } from './components/Actions/Actions';
import { useRef } from "react";

interface GettyViewerProps {
  manifest: string;
  initCanvas: number;
}

export function GettyViewer(props: GettyViewerProps) {
  const zoom_ref = useRef(null);
  return (
    <VaultProvider>
      <MainProvider manifest={props.manifest}>
        <Grid
          sidebar={
            <Sidebar>
              <ThumbnailPagedList />
            </Sidebar>
          }
          actions={
            <Actions
              onZoomIn={() => {
                zoom_ref.current.f(0.75);
              }}
              onZoomOut={() => {
                zoom_ref.current.f(1 / 0.75);
              }}
              onReset={() => {
                zoom_ref.current.f('home');
              }}
            />
          }
        >
          <DeepZoomViewer initCanvas={props.initCanvas} ref={zoom_ref} />
        </Grid>
      </MainProvider>
    </VaultProvider>
  );
}
