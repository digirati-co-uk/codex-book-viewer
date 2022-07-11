import { greyBg, serif, whiteText } from '../../tokens';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${greyBg};
  color: ${whiteText};
  padding: 1em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h3`
  font-size: 1.4em;
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
