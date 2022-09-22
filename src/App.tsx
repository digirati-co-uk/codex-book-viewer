import { CodexViewer } from './CodexViewer';

export function App() {
  return (
    // Book 12 38r
    <CodexViewer
      manifest="https://dfc-be.ch.digtest.co.uk/iiif/iiif/manifest/6871ffde-2d95-45a2-b444-8f442fa29805/"
      canvasId="https://dfc-be.ch.digtest.co.uk/iiif/iiif/canvas/d36a3c23-fc4b-4e50-874a-72a5aefe97b8/"
      book="12"
    />
  );
}
