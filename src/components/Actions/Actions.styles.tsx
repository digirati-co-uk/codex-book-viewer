import styled, { css } from 'styled-components';
import { highlight } from '../../tokens';

export const Container = styled.div`
  background-color: #2a3037;
  border-radius: 15px 0 0 15px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 50px;
  }
`;
export const LayoutBtn = styled.button<{ $selected: string; $id: string }>`
  background-color: transparent;
  border: none;
  width: 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0.5em 0;
  cursor: pointer;

  :hover div {
    background-color: #8bcfd7;
  }

  ${(props) =>
    props.$selected &&
    props.$selected === props.$id &&
    css` & div {
            background-color: ${highlight};
          `}
}
`;

export const Layout = styled.div`
  padding: 1em 0;
  height: auto;
`;

export const Zoom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5em;

  @media screen and (max-width: 500px) {
    font-size: 1.5em;
  }
`;

export const ZoomBtn = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  border-radius: 25px;
  cursor: pointer;
  padding: 010px;

  svg {
    height: 18px;
  }

  :hover {
    color: #8bcfd7;
  }

  :focus {
    border: 1px solid ${highlight};

  }
}
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  width: 25px;
  margin: 10px;
  padding: 1em 0;

  @media screen and (max-width: 500px) {
    width: 20px;
    margin: 5px;
    padding: 1em 0;
  }

  :hover {
    color: #8bcfd7;
  }

  :focus {
    border: 1px solid ${highlight};
  }
`;

export const Icon = styled.div`
  width: 11px;
  height: 15px;
  background-color: white;
  border-radius: 2px;
  margin: 1px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 55px;
  margin: 1em 0;
  background-color: rgba(234, 234, 235, 0.18);

  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;
