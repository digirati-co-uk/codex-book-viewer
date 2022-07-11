import { greyBg, serif, whiteText } from '../../tokens';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${greyBg};
  color: ${whiteText};
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8em 1em 1em 1em;
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
