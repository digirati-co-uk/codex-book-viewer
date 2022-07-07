import { useThumbnail } from 'react-iiif-vault';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { ThumbnailImage, ThumbnailPlaceholder } from '../ThumbnailPagedList/ThumbnailPageList.styles';

export function SingleCanvasThumbnail({ size }: { size: number }) {
  const thumbnail = useThumbnail({
    width: size,
    height: size,
  });

  if (!thumbnail) {
    return <ThumbnailPlaceholder />;
  }

  return (
    <LazyLoadComponent threshold={800} style={{ height: size, width: size }}>
      <Inner size={size} />
    </LazyLoadComponent>
  );
}

function Inner({ size }: { size: number }) {
  const thumbnail = useThumbnail({
    width: size,
    height: size,
  });

  if (!thumbnail || thumbnail.type !== 'fixed') {
    return <ThumbnailPlaceholder />;
  }

  return <ThumbnailImage threshold={800} src={thumbnail.id} />;
}
