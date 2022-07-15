import { Grid } from './components/Grid/Grid';
import { Sidebar } from './components/Sidebar/Sidebar';
import { VaultProvider } from 'react-iiif-vault';
import { ThumbnailPagedList } from './components/ThumbnailPagedList/ThumbnailPagedList';
import { MainProvider } from './components/MainProvider/MainProvider';
import { DeepZoomViewer } from './components/DeepZoomViewer/DeepZoomViewer';
import { Actions } from './components/Actions/Actions';

interface GettyViewerProps {
  manifest: string;
  initCanvas: number;
}

export function GettyViewer(props: GettyViewerProps) {
  const handleZoom = (): void => {
    console.log('hi');
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
          actions={<Actions onZoomIn={handleZoom} onZoomOut={handleZoom} />}
        >
          <DeepZoomViewer initCanvas={props.initCanvas} />
        </Grid>
      </MainProvider>
    </VaultProvider>
  );
}
