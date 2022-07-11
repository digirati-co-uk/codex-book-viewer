import { greyBg, serif, whiteText } from '../../tokens';
import styled from 'styled-components';
import { DragHandle } from '@styled-icons/material-rounded/DragHandle';

export const Container = styled.div`
  background: ${greyBg};
  color: ${whiteText};

  display: flex;
  flex-direction: column;
  padding: 8em 1em 1em 1em;
  width: 100%;
`;

export const Heading = styled.h3`
  font-size: 18px;
  font-family: ${serif};
  text-rendering: geometricPrecision;
  font-weight: 400;
  color: ${whiteText};
  margin: 0 0 1em 1em;
`;

export const Content = styled.div`
  flex: 1 1 0;
  overflow-y: auto;
`;
export const Resizer = styled.div`
  position: absolute;
  bottom: 0;
  left: 100%;
  width: 15px;
  height: 100%;
  background-color: white;
  color: blue;

  &:hover svg {
    background-color: white;
    color: red;
  }
`;

export const Handle = styled(DragHandle)<{ mouseDown: boolean }>`
  position: absolute;
  cursor: ${(props) => (props.mouseDown ? 'grabbing' : 'grab')};
  left: 0;
  top: 300px;
  border-radius: 5px;
  background-color: ${(props) => (props.mouseDown ? '#ededed' : 'red')};
  color: ${(props) => (props.mouseDown ? '#36647e' : 'transparent')};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  width: 31px;
  height: 18px;
  z-index: ${(props) => (props.direction === 'bottom' ? '0' : '12')};

  @media (max-width: 999px) {
    display: ${(props) => (props.direction === 'right' ? 'none' : 'block')};
  }
`;