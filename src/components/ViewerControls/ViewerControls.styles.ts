import styled, { css } from 'styled-components';
import { blackBg, greyBg, greyBg2, whiteText } from '../../tokens';

export const FloatingContainerOuter = styled.div`
  position: relative;
  width: 100%;

`;

export const FloatingContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  transform: translateY(-50%);
  z-index: 11;
`;

export const Container = styled.div`
  background: ${greyBg};
  border-radius: 1.5em;
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;
  padding: 0.3em;
`;

export const Button = styled.button<{ $pos: 'left' | 'right' }>`
  background: ${greyBg};
  color: ${whiteText};
  border: none;
  margin: 0;
  padding: 0.675em 1.35em;
  cursor: pointer;
  font-size: 0.8em;
  border-radius: 0.6em;
  display: flex;
  align-items: center;
  text-rendering: geometricPrecision;
  text-transform: uppercase;

  ${(props) =>
    props.$pos === 'left'
      ? css`
          border-top-left-radius: 1.8em;
          border-bottom-left-radius: 1.8em;
          justify-content: flex-start;
        `
      : css`
          border-top-right-radius: 1.8em;
          border-bottom-right-radius: 1.8em;
          justify-content: flex-end;
        `}

  &:hover {
    background: ${greyBg2};
  }
`;

export const CentralContainer = styled.div`
  margin: 0 2em;
  display: flex;
  justify-content: center;
  align-content: center;
  align-self: center;

  @media screen and (max-width: 500px) {
    margin: 0 0.75em;
  }
`;

export const InputLabel = styled.label`
  color: ${whiteText};
  display: flex;
  margin-right: 1em;
`;
export const Input = styled.input`
  border: none;
  background: ${whiteText};
  color: ${blackBg};
  border-radius: 3px;
  padding: 0.4em;
  width: 4.5em;
`;
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1em;
  color: ${whiteText};

  & ~ & {
    margin-left: 0.4em;
  }
`;
export const ButtonIcon = styled.span`
  margin: 0 0.5em;
  transform: translateY(0.1em);
`;
