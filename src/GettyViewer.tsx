import { Grid } from './components/Grid/Grid';
import { Sidebar } from './components/Sidebar/Sidebar';
import { VaultProvider } from 'react-iiif-vault';
import { ThumbnailPagedList } from './components/ThumbnailPagedList/ThumbnailPagedList';
import { MainProvider } from './components/MainProvider/MainProvider';
import { DeepZoomViewer } from './components/DeepZoomViewer/DeepZoomViewer';
import { Actions } from './components/Actions/Actions';
import { useState } from "react";

interface GettyViewerProps {
  manifest: string;
  initCanvas: number;
}

export function GettyViewer(props: GettyViewerProps) {
  const [zoomInt, setZoomInt] = useState<string>('50');

  const handleZoom = (zoom: string): void => {
    setZoomInt(zoom);
  };
  return (
    <VaultProvider>
      <MainProvider manifest={props.manifest}>
        <Grid
          sidebar={
            <Sidebar>
              <ThumbnailPagedList />
            </Sidebar>
          }
          actions={<Actions onZoom={handleZoom} zoom={zoomInt} />}
        >
          <DeepZoomViewer initCanvas={props.initCanvas} zoom={zoomInt} />
        </Grid>
      </MainProvider>
    </VaultProvider>
  );
}
