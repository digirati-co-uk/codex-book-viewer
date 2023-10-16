import { CodexViewer } from './CodexViewer';

export function App() {
  return (
    <CodexViewer
      manifest="https://dfc-be.ch.digtest.co.uk/iiif/iiif/manifest/7186e23f-9f0b-42f2-9d18-60350400d246/"
      initCanvas="https://dfc-be.ch.digtest.co.uk/iiif/iiif/canvas/0b291b56-9aac-4cb4-8542-9764942a4eb8/"
      range="https://digirati-co-uk.github.io/florentine-data-exploration/iiif3/vol3/range/book/12.json"
    />
  );
}
//https://dfc-be.ch.digtest.co.uk/iiif/iiif/canvas/0b291b56-9aac-4cb4-8542-9764942a4eb8/
//https://dfc-be.ch.digtest.co.uk/iiif/iiif/range/book/12.json