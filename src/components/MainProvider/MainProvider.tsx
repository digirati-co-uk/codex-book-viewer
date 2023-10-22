import { ReactElement } from 'react';
import { SimpleViewerProvider, useExternalManifest } from 'react-iiif-vault';
import { Skeleton } from '../Skeleton'
interface MainProviderProps {
  manifest: string;
  children: ReactElement;
  paging: boolean;
  range: string;
  initCanvas: string;
}
export function MainProvider(props: MainProviderProps) {
  const { manifest, isLoaded } = useExternalManifest(props.manifest);
  // Fixes bug with react-iiif-vault where it shows a "something went wrong error".
  const resp = useExternalManifest(props.manifest);

  if (!manifest || !isLoaded) {
    return <div>Loading...</div>;
  }

  if (!resp.manifest) {
    return <div>Loading...</div>;
  }

  resp.manifest.behavior = ['paged'];

  // if (isLoaded) {
  return <Skeleton />
  // }


//   return (
//     <SimpleViewerProvider
//       key={props.paging ? 'paging' : 'non-paging'}
//       pagingEnabled={props.paging}
//       manifest={props.manifest}
//       rangeId={props.range}
//       startCanvas={props.initCanvas}
//     >
//       {props.children}
//     </SimpleViewerProvider>
//   );
// }
}