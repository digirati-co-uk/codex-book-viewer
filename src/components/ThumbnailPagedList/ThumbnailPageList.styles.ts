import styled, { css } from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { greyBg, highlight, sans, whiteText } from '../../tokens';

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

export const ThumbnailImage = styled(LazyLoadImage as any)`
  display: block;
  max-width: 100%;
  object-fit: contain;
  object-position: center;
  width: 128px;
  height: 172px;
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

export const ThumbnailColumn = styled.div<{ $expanded?: boolean }>`
  display: flex;
  flex-wrap: ${(props) => props.$expanded ? 'wrap' : ''};
  flex-direction: ${(props) => props.$expanded ? 'row' : 'column'};
`;
export const ThumbnailRow = styled.div<{ $active?: boolean }>`
  display: flex;
  margin: 0.5em;
  justify-content: center;
  ${(props) =>
    props.$active &&
    css`
      outline: 2px solid ${highlight};
    `}
`;

export const ThumbnailTitle = styled.h2`
  font-size: 0.75em;
  font-weight: 400;
  font-family: ${sans};
  text-rendering: geometricPrecision;
  color: ${whiteText};
`;
