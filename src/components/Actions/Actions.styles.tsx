import styled, { css } from 'styled-components';
import { Splitscreen } from '@styled-icons/material/Splitscreen';
import { highlight } from '../../tokens';

export const Container = styled.div`
  background-color: #2a3037;
  width: 50px;
  min-height: 550px;
  border-radius: 15px 0 0 15px;
  color: white;
  padding: 5px;
  display: flex;
  flex-direction: column;
`;
export const LayoutBtn = styled.button<{ selected: string; id: string }>`
  background-color: transparent;
  border: none;
  width: 30px;
  height: 15px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 10px 5px;
  padding: 0;
  cursor: pointer;

  :hover div {
    background-color: #8bcfd7;
  }

  ${(props) =>
    props.selected &&
    props.selected === props.id &&
    css` & div {
            background-color: ${highlight};
          `}
}
`;

export const Layout = styled.div``;
export const Zoom = styled.div``;
export const Print = styled.div``;
export const Cite = styled.div``;
export const Icon = styled.div`
  width: 11px;
  height: 15px;
  background-color: white;
  border-radius: 2px;
  margin: 1px;
`;
