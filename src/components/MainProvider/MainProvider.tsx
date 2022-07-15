import { ReactElement } from 'react';
import { SimpleViewerProvider, useExternalManifest } from 'react-iiif-vault';

interface MainProviderProps {
  manifest: string;
  children: ReactElement;
  paging: boolean;
}
export function MainProvider( props: MainProviderProps) {
  // Fixes bug with react-iiif-vault where it shows a "something went wrong error".
  const resp = useExternalManifest(props.manifest);

  if (!resp.manifest) {
    return <div>Loading...</div>;
  }
  resp.manifest.behavior = ['paged'];

  return (
    <SimpleViewerProvider pagingEnabled={props.paging} manifest={props.manifest}>
      {props.children}
    </SimpleViewerProvider>
  );
}
