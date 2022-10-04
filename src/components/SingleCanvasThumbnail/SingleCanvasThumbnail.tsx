import { useCanvas, useThumbnail } from 'react-iiif-vault';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { ThumbnailImage, ThumbnailPlaceholder, ThumbnailTitle } from '../ThumbnailPagedList/ThumbnailPageList.styles';
import { getValue } from '@iiif/vault-helpers';
import { LocaleString } from '@iiif/vault-helpers/react-i18next';

export function SingleCanvasThumbnail({ size }: { size: number }) {
  const thumbnail = useThumbnail({
    width: size,
    height: size,
  });
  const canvas = useCanvas();
  const metadata = canvas ? canvas.metadata : '';

  const book = metadata ? metadata.findIndex((x) => x.label.en?.includes("Book")) : '';
  const folio = metadata ? metadata.findIndex((x) => x.label.en?.includes("Book Foliation")) : '';


  if (!thumbnail) {
    return <ThumbnailPlaceholder />;
  }

  return (
    <LazyLoadComponent threshold={800} style={{ height: size, width: size }}>
      <Inner size={size} />
      <ThumbnailTitle>
        <LocaleString>
          {metadata[book].label}
        </LocaleString>
        {' '}
        <LocaleString>
          {metadata[book].value}
        </LocaleString>
        {', '}
        <LocaleString>
          {metadata[folio].value}
        </LocaleString>
      </ThumbnailTitle>
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
