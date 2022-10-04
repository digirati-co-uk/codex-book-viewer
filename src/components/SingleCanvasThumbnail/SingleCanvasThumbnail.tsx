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
  const metadata = canvas ? canvas.metadata: null;

  // @ts-ignore
  const book = metadata ? metadata.findIndex((x) => x.label.en == "Book") : '';
  // @ts-ignore
  const folio = metadata ? metadata.find((x) => x.label.en == "Book Foliation").value : '';


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
          {folio}
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
