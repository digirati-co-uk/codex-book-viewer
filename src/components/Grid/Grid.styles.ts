import styled, { css } from 'styled-components';
import { ThumbnailViewer } from '../ThumbnailPagedList/ThumbnailPageList.styles';

export const Container = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`;

export const Sidebar = styled.aside<{ $open: boolean; $expanded: boolean }>`
  display: flex;
  flex-direction: row;

  ${(props) =>
    props.$open
      ? css`
          min-width: 20em;
          // Open styles.
          ${props.$expanded &&
          css`
            // Expanded styles.
            width: 90vw;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            z-index: 12;

            ${ThumbnailViewer} {
              grid-template-columns: repeat(10, 1fr);
            }
          `}
        `
      : css`
          // Closed styles.
          width: 0;

          h3 {
            display: none;
          }

          div {
            background: transparent;
          }

          ${ThumbnailViewer} {
            width: 0;
          }
        `}
`;

export const Main = styled.div`
  flex: 1 1 0;
  display: flex;
  min-width: 0;
`;

export const Actions = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 12;
`;
