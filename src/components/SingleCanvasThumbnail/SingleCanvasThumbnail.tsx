import { useCanvas, useThumbnail } from "react-iiif-vault";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { ThumbnailImage, ThumbnailPlaceholder, ThumbnailTitle } from "../ThumbnailPagedList/ThumbnailPageList.styles";

export function SingleCanvasThumbnail({ size }: { size: number }) {
  const thumbnail = useThumbnail({
    width: size,
    height: size,
  });
  const canvas = useCanvas();

  if (!thumbnail) {
    return <ThumbnailPlaceholder />;
  }

  return (
    <LazyLoadComponent threshold={800} style={{ height: size, width: size }}>
      <Inner size={size} />
      <ThumbnailTitle>
        Book {canvas.metadata[1].value.en}, Folio {canvas.metadata[2].value.en}
      </ThumbnailTitle>
    </LazyLoadComponent>
  );
}

function Inner({ size }: { size: number }) {
  const thumbnail = useThumbnail({
    width: size,
    height: size
  });

  if (!thumbnail || thumbnail.type !== "fixed") {
    return <ThumbnailPlaceholder />;
  }

  return <ThumbnailImage threshold={800} src={thumbnail.id} />;
}
