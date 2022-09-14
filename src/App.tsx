import { CodexViewer } from './CodexViewer';

export function App() {
  // return (
  //   <CodexViewer manifest="https://digirati-co-uk.github.io/wunder.json" />
  // );
  return (
    <CodexViewer
      manifest="https://digirati-co-uk.github.io/florentine-data-exploration/iiif3/vol3.json"
      initCanvas={324}
    />
  );
}
