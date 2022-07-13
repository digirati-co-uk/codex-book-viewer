import { greyBg, greyBg2, serif, whiteText } from "../../tokens";
import styled from 'styled-components';
import { ChevronBarRight, ChevronRight } from '@styled-icons/bootstrap';

export const Container = styled.div`
  background: ${greyBg};
  color: ${whiteText};
  display: flex;
  flex-direction: column;
  padding: 8em 1em 1em 1em;
  width: 100%;
  position: relative;
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

export const Buttons = styled.div`
  display: flex;
`;

export const Button = styled.button`
  background-color: ${greyBg2};
  border: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  left: 95%;
  z-index: 12;
  top: 10%;
  margin: 5px;
  
  svg {
    color: white;
    width: 18px;
    height: 18px;
    z-index: 12;
  }
`;
