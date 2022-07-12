import { greyBg, serif, whiteText } from '../../tokens';
import styled from 'styled-components';
import { ChevronBarRight, ChevronRight  } from '@styled-icons/bootstrap';

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
  background-color: white;
  border: none;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  left: 95%;
  z-index: 12;
  top: 10%;
`;

export const Open = styled(ChevronRight)`
  border-radius: 5px;
  color: #31738e;
  width: 18px;
  height: 18px;
  z-index: 12;
`;
export const Close = styled(ChevronRight)`
  border-radius: 5px;
  color: #31738e;
  width: 18px;
  height: 18px;
  z-index: 12;
  transform: rotate(180deg);
`;
export const Expand = styled(ChevronBarRight)`
  border-radius: 5px;
  color: #31738e;
  width: 18px;
  height: 18px;
  z-index: 12;
`;
export const Minimise = styled(ChevronBarRight)`
  border-radius: 5px;
  color: #31738e;
  width: 18px;
  height: 18px; 
  z-index: 12;
  transform: rotate(180deg);
`;