import { CanvasContext, useManifest, useSimpleViewer, useVault } from 'react-iiif-vault';
import { SingleCanvasThumbnail } from '../SingleCanvasThumbnail/SingleCanvasThumbnail';
import { ThumbnailRow, Thumbnail, ThumbnailCover, ThumbnailColumn } from './ThumbnailPageList.styles';
import { useLayoutEffect } from 'react';
import { CanvasNormalized } from '@iiif/presentation-3';
import { useGridState } from '../Grid/Grid.context';

export function ThumbnailPagedList() {
  const manifest = useManifest();
  const { currentSequenceIndex, sequence, items, setCurrentCanvasId } = useSimpleViewer();
  const vault = useVault();
  const gridState = useGridState();

  useLayoutEffect(() => {
    const found = document.querySelector(`[data-canvas-sequence-index="${currentSequenceIndex}"]`);
    if (found) {
      found.scrollIntoView({
        block: 'nearest',
        behavior: 'auto',
      });
    }
  }, [currentSequenceIndex]);

  if (!manifest || !sequence) {
    return null;
  }

  return (
    <ThumbnailColumn $expanded={gridState.expanded}>
      {sequence.map((sideBySide, idx) => {

        return (
          <ThumbnailRow data-canvas-sequence-index={idx} key={idx} $active={idx === currentSequenceIndex}>
            {sideBySide.map((index) => {
              const canvasRef = items[index];
              const canvas = vault.get<CanvasNormalized>(canvasRef);
              const T = canvas.behavior.indexOf('non-paged') !== -1 || idx === 0 ? ThumbnailCover : Thumbnail;

              return (
                <CanvasContext key={canvas.id} canvas={canvas.id}>
                  <T
                    onClick={() => setCurrentCanvasId(canvas.id)}
                    data-canvas-thumbnail-index={idx}
                  >
                    <SingleCanvasThumbnail size={128} />
                  </T>
                </CanvasContext>
              );
            })}
          </ThumbnailRow>
        );
      })}
    </ThumbnailColumn>
  );
}
