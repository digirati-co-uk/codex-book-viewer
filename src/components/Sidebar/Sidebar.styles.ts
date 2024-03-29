import { greyBg, greyBg2, highlight, serif, whiteText } from '../../tokens';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${greyBg};
  color: ${whiteText};
  display: flex;
  flex-direction: column;
  padding: 8em 1em 1em 1em;
  width: 100%;
  position: relative;
  min-width: 150px;
`;

export const Heading = styled.h3`
  font-size: 1.125em;
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

export const Buttons = styled.div`
  display: flex;
  border-top: 2px solid #ffffff47;
`;

export const Button = styled.button`
  background-color: ${greyBg2};
  border: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  place-items: center;
  z-index: 12;
  margin: 10px 5px 0 5px;
  cursor: pointer;
  position: relative;

  :hover {
    background-color: ${highlight};
  }

  :focus {
    border: 1px solid ${highlight};
  }
  svg {
    align-items: center;
    fill: white;
    font-size: 16px;
    z-index: 12;
  }
`;
