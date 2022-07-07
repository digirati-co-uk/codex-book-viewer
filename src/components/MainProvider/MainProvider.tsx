import { ReactElement } from 'react';
import { SimpleViewerProvider, useExternalManifest } from 'react-iiif-vault';

export function MainProvider({ manifest, children }: { children: ReactElement; manifest: string }) {
  // Fixes bug with react-iiif-vault where it shows a "something went wrong error".
  const resp = useExternalManifest(manifest);

  if (!resp.manifest) {
    return <div>Loading...</div>;
  }
  resp.manifest.behavior = ['paged'];

  return (
    <SimpleViewerProvider pagingEnabled manifest={manifest}>
      {children}
    </SimpleViewerProvider>
  );
}
