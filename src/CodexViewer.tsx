import { Grid } from './components/Grid/Grid';
import { Sidebar } from './components/Sidebar/Sidebar';
import { useExternalManifest, VaultProvider } from "react-iiif-vault";
import { ThumbnailPagedList } from './components/ThumbnailPagedList/ThumbnailPagedList';
import { MainProvider } from './components/MainProvider/MainProvider';
import { DeepZoomViewer } from './components/DeepZoomViewer/DeepZoomViewer';
import { Actions } from "./components/Actions/Actions";
import { useState } from "react";

export interface CodexViewerProps {
  manifest: string;
  initCanvas: number;
}

export function CodexViewer(props: CodexViewerProps) {
  const [paging, setPaging] = useState(true);

  const handleLayout = (x: string) => {
    x === '1' ? setPaging(false) : setPaging(true);
  };

  return (
    <VaultProvider>
      <MainProvider manifest={props.manifest} paging={paging}>
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
            />
          }
        >
          <DeepZoomViewer initCanvas={props.initCanvas} />
        </Grid>
      </MainProvider>
    </VaultProvider>
  );
}
