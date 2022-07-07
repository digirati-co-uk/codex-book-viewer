import { Grid } from './components/Grid/Grid';
import { Sidebar } from './components/Sidebar/Sidebar';
import { VaultProvider } from 'react-iiif-vault';
import { ThumbnailPagedList } from './components/ThumbnailPagedList/ThumbnailPagedList';
import { MainProvider } from './components/MainProvider/MainProvider';
import { DeepZoomViewer } from './components/DeepZoomViewer/DeepZoomViewer';

interface GettyViewerProps {
  manifest: string;
}

export function GettyViewer(props: GettyViewerProps) {
  return (
    <VaultProvider>
      <MainProvider manifest={props.manifest}>
        <Grid
          sidebar={
            <Sidebar>
              <ThumbnailPagedList />
            </Sidebar>
          }
          actions={<div>actions</div>}
        >
          <DeepZoomViewer />
        </Grid>
      </MainProvider>
    </VaultProvider>
  );
}
