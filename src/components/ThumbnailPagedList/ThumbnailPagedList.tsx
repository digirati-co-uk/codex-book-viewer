import { CanvasContext, useManifest, useSimpleViewer, useVault } from 'react-iiif-vault';
import { SingleCanvasThumbnail } from '../SingleCanvasThumbnail/SingleCanvasThumbnail';
import { ThumbnailRow, Thumbnail, ThumbnailCover, ThumbnailColumn } from './ThumbnailPageList.styles';
import { useLayoutEffect } from 'react';
import { CanvasNormalized } from '@iiif/presentation-3';

export function ThumbnailPagedList() {
  const manifest = useManifest();
  const { currentSequenceIndex, sequence, items, setCurrentCanvasId } = useSimpleViewer();
  const vault = useVault();

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
    <ThumbnailColumn>
      {sequence.map((sideBySide, idx) => {
        // @todo this is a row - so it may need style when in the expanded view.
        //     The sequence is: [ [0], [1, 2], [3, 4] ...]
        //     Indicating what the order should be. The full canvas can be retrieved using:
        //        items[index];
        //     This Allows rows / columns to be built. However when in expanded view it needs a
        //     different style to fit into model free-flowing grid.
        return (
          <ThumbnailRow data-canvas-sequence-index={idx} key={idx} $active={idx === currentSequenceIndex}>
            {sideBySide.map((index) => {
              const canvasRef = items[index];
              const canvas = vault.get<CanvasNormalized>(canvasRef);
              const T = canvas.behavior.indexOf('non-paged') !== -1 || idx === 0 ? ThumbnailCover : Thumbnail;

              return (
                <CanvasContext key={canvas.id} canvas={canvas.id}>
                  <T
                    // $active={ids.indexOf(canvas.id) !== -1}
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
