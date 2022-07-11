import styled, { css } from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { greyBg, highlight, serif, whiteText } from "../../tokens";

export const Thumbnail = styled.div<{ $active?: boolean }>`
  background: ${greyBg};
  border-radius: 5px;
  padding: 5px;
  outline: 2px solid transparent;

  transition: outline-color 240ms;
  ${(props) =>
    props.$active &&
    css`
      outline: 2px solid ${highlight};
    `}
`;

export const ThumbnailCover = styled(Thumbnail)`
  height: auto;
  width: 100%;
  grid-column: 1 / -1;
  img {
    margin: 0 auto;
    width: 256px;
    height: 256px;
  }
`;

export const ThumbnailPlaceholder = styled.div`
  display: inline-block;
  width: 128px;
  height: 168px;
  background: ${greyBg};
`;

export const ThumbnailImage = styled(LazyLoadImage)`
  display: block;
  max-width: 100%;
  object-fit: contain;
  object-position: center;
  width: 128px;
  height: 172px;
  border-radius: 15px;
`;

export const ThumbnailViewer = styled.div`
  padding: 1em;
  overflow: auto;
  height: 100%;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  justify-items: center;
`;
export const ThumbnailTitle = styled.h2`
  font-size: 12px;
  font-weight: 400;
  font-family: ${serif};
  text-rendering: geometricPrecision;
  color: ${whiteText};
`;
