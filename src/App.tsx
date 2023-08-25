import { CodexViewer } from './CodexViewer';

export function App() {
  return (
    <CodexViewer
      manifest="https://dfc-be.ch.digtest.co.uk/iiif/iiif/manifest/5c760f92-de01-42ef-ac94-30a4d3559a4f/"
      initCanvas="https://dfc-be.ch.digtest.co.uk/iiif/iiif/canvas/8c4ee37a-81b0-427e-9f36-b7067e4300ef/"
      range="https://digirati-co-uk.github.io/florentine-data-exploration/iiif3/range/book/12.json"
    />
  );
}
