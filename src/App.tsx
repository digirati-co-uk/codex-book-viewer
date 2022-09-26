import { CodexViewer } from './CodexViewer';

export function App() {
  return (
    <CodexViewer
      manifest="http://localhost:8000/iiif/iiif/manifest/6871ffde-2d95-45a2-b444-8f442fa29805/"
      initCanvas="http://localhost:8000/iiif/iiif/canvas/221657c0-f942-4e61-82fa-c26d42aca53a/"
      range="https://digirati-co-uk.github.io/florentine-data-exploration/iiif3/range/book/10.json"
    />
  );
}
