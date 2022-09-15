import { CodexViewer } from './CodexViewer';

export function App() {
  // return (
  //   <CodexViewer manifest="https://digirati-co-uk.github.io/wunder.json" />
  // );
  return (
    <CodexViewer
      manifest="https://digirati-co-uk.github.io/florentine-data-exploration/iiif3/vol3_paged.json"
      initCanvas={324}
      range={'https://digirati-co-uk.github.io/florentine-data-exploration/iiif3/range/book/10.json'}
    />
  );
}
