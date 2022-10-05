import { CodexViewer } from './CodexViewer';

export function App() {
  return (
    <CodexViewer
      manifest="http://localhost:8000/iiif/iiif/manifest/34324a46-f9e5-4678-97a3-3ee4528170e1/"
      initCanvas="http://localhost:8000/iiif/iiif/canvas/ef6f77cc-2b30-48b6-9d4b-82fd248777c3/"
      range="https://digirati-co-uk.github.io/florentine-data-exploration/iiif3/range/book/12.json"
    />
  );
}
