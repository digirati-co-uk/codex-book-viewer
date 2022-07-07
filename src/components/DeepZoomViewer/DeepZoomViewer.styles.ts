import styled from 'styled-components';
import { blackBg, serif, whiteText } from '../../tokens';

export const Heading = styled.h1`
  font-size: 1.8em;
  margin: 1em 0 2em;
  width: 100%;
  color: ${whiteText};
  font-family: ${serif};
  text-align: center;
  text-rendering: geometricPrecision;
  font-weight: 400;
`;

export const Container = styled.div`
  background: ${blackBg};
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
`;

export const AtlasContainer = styled.div`
  display: flex;
  flex: 1 1 0px;
  flex-direction: column;
  min-width: 0;
`;
