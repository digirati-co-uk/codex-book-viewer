import styled, { css } from 'styled-components';

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
          `}
        `
      : css`
          // Closed styles.
        `}
`;

export const Main = styled.div`
  flex: 1 1 0px;
  display: flex;
  min-width: 0;
`;

export const Actions = styled.div`
  position: absolute;
  right: 0;
`;
