import { useCanvas, useThumbnail } from 'react-iiif-vault';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { ThumbnailImage, ThumbnailPlaceholder, ThumbnailTitle } from '../ThumbnailPagedList/ThumbnailPageList.styles';
import { LocaleString } from '@iiif/vault-helpers/react-i18next';
import { useTranslation } from 'react-i18next';
export function SingleCanvasThumbnail({ size }: { size: number }) {
  const thumbnail = useThumbnail({
    width: size,
    height: size,
  });
  const canvas = useCanvas();
  const metadata = canvas ? canvas.metadata : [];
  const { t } = useTranslation();
  const book = metadata ? metadata.findIndex((x) => x.label.en?.includes('Book')) : -1;
  const folio = metadata ? metadata.findIndex((x) => x.label.en?.includes('Book Foliation')) : -1;

  if (!thumbnail) {
    return <ThumbnailPlaceholder />;
  }
  return (
    <LazyLoadComponent threshold={800} style={{ height: size, width: size }}>
      <Inner size={size} />
      <ThumbnailTitle>
        {book !== -1 ? (
          <>
            {t('book')}{' '} <LocaleString>{metadata[book].value}</LocaleString>
            {', '}{t('folio')}{' '}
            <LocaleString>{metadata[folio].value}</LocaleString>
          </>
        ) : (
          <LocaleString>{canvas?.label}</LocaleString>
        )}
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
