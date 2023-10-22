import styled from "styled-components"
import SpinnerIcon from '../icons/SpinnerIcon';
import { greyBg2, blackBg2, highlight} from '../tokens';
export const Container = styled.div`
  display: flex;
  height: 100%
 
`;

export const Left = styled.div`
  width: 30%;
  background-color: ${greyBg2};
`;

export const Spinner = styled(SpinnerIcon)`
  fill: ${highlight};
  font-size: 20px;
  animation: spin 2s linear infinite;
  margin: 0 5px;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export const Main = styled.div`
  width: 100%;
  background-color: ${blackBg2};
  color: white;
  display: flex;
  justify-content: center;
  padding-top: 4em;

`;

export const Skeleton = () => {
  return (
    <Container>
      <Left />
      <Main> <Spinner/> Loading... </Main>
    </Container>
  )
}