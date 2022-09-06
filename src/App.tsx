import { GettyViewer } from './GettyViewer';

export function App() {
  // return (
  //   <GettyViewer manifest="https://digirati-co-uk.github.io/wunder.json" />
  // );
  return (
    <GettyViewer
      manifest="https://digirati-co-uk.github.io/florentine-data-exploration/iiif3/vol3_paged.json"
      initCanvas={324}
    />
  );
}
