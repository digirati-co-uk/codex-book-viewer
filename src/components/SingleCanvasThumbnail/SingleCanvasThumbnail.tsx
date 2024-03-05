import { useCanvas, useImageService, useThumbnail } from 'react-iiif-vault';
import { LazyLoadComponent as _LazyLoadComponent } from 'react-lazy-load-image-component';
import { ThumbnailImage, ThumbnailPlaceholder, ThumbnailTitle } from '../ThumbnailPagedList/ThumbnailPageList.styles';
import { LocaleString } from 'react-iiif-vault';
import { useTranslation } from 'react-i18next';

const LazyLoadComponent = _LazyLoadComponent as any;

export function SingleCanvasThumbnail({ size }: { size: number }) {
  const canvas = useCanvas();
  const metadata = canvas ? canvas.metadata : [];
  const { t } = useTranslation();
  const book = metadata ? metadata.findIndex((x) => x.label.en?.includes('Book')) : -1;
  const folio = metadata ? metadata.findIndex((x) => x.label.en?.includes('Book Foliation')) : -1;

  return (
    <LazyLoadComponent threshold={800} style={{ height: size, width: size }}>
      <Inner size={size} />
      <ThumbnailTitle>
        {book !== -1 ? (
          <>
            {t('book')} <LocaleString>{metadata[book].value}</LocaleString>
            {', '}
            {t('folio')} <LocaleString>{metadata[folio].value}</LocaleString>
          </>
        ) : (
          <LocaleString>{canvas?.label}</LocaleString>
        )}
      </ThumbnailTitle>
    </LazyLoadComponent>
  );
}

function Inner({ size }: { size: number }) {
  const thumbnail = useThumbnail(
    {
      width: size,
      height: size,
    },
    true
  );

  if (!thumbnail || thumbnail.type !== 'fixed') {
    return <ThumbnailPlaceholder />;
  }

  return <ThumbnailImage threshold={800} src={thumbnail.id} />;
}
