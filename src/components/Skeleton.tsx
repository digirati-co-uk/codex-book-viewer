import styled from "styled-components"
import { greyBg2, blackBg2} from '../tokens';
export const Container = styled.div`
  display: flex;
  height: 100%
 
`;

export const Left = styled.div`
  width: 30%;
  background-color: ${greyBg2};
`;

export const Main = styled.div`
  width: 100%;
  background-color: ${blackBg2};
`;

export const Skeleton = () => {
  return (
    <Container>
      <Left />
      <Main> Loading... <Loa /> </Main>
    </Container>
  )
}