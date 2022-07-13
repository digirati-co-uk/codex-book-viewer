import styled, { css } from 'styled-components';
import { highlight } from '../../tokens';

export const Container = styled.div`
  background-color: #2a3037;
  width: 50px;
  min-height: 550px;
  border-radius: 15px 0 0 15px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Layout = styled.div`
  padding: 10px 0;
  position: relative;
  height: auto;

  :after {
    content: '';
    position: absolute;
    height: 1px;
    width: 150%;
    padding: 0;
    left: -5px;
    right: 0;
    bottom: 0;
    top: 110%;
    background-color: rgba(234, 234, 235, 0.18);
  }
`;

export const Zoom = styled.div`
  padding: 10px;
  position: relative;

  :after {
    content: '';
    position: absolute;
    height: 1px;
    width: 150%;
    padding: 0;
    left: -5px;
    right: 0;
    bottom: 0;
    top: 100%;
    background-color: rgba(234, 234, 235, 0.18);
  }
`;
export const IconButton = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
  width: 30px;
  margin: 10px;
  :hover {
    color: #8bcfd7;
  }
  :after {
    content: '';
    position: absolute;
    height: 1px;
    width: 55px;
    padding: 0;
    left: -10px;
    right: 0;
    bottom: 0;
    top: 150%;
    background-color: rgba(234, 234, 235, 0.18);
  }
`;

export const Icon = styled.div`
  width: 11px;
  height: 15px;
  background-color: white;
  border-radius: 2px;
  margin: 1px;
`;
