import { CodexViewer } from './CodexViewer';

export function App() {
  return (
    <CodexViewer
      manifest="https://dfc-be.ch.digtest.co.uk/iiif/iiif/manifest/f7e7ee30-7507-40db-acd2-9cd43df95b8f/"
      initCanvas="https://dfc-be.ch.digtest.co.uk/iiif/iiif/canvas/8782208c-45a2-44f9-9538-e3810a08fca4/"
      range="https://digirati-co-uk.github.io/florentine-data-exploration/iiif3/range/book/11.json"
    />
  );
}
