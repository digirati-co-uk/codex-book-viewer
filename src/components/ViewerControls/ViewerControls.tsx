import { useSimpleViewer } from 'react-iiif-vault';
import {
  ButtonIcon,
  Button,
  Input,
  InputLabel,
  TextContainer,
  Container,
  CentralContainer,
  FloatingContainer,
  FloatingContainerOuter,
} from './ViewerControls.styles';
import { PrevIcon } from '../../icons/PrevIcon';
import { NextIcon } from '../../icons/NextIcon';
import { useEffect, useState } from 'react';

export function ViewerControls() {
  const { totalCanvases, currentCanvasIndex, setCurrentCanvasIndex, nextCanvas, previousCanvas } = useSimpleViewer();
  const [cachedValue, setCachedValue] = useState(currentCanvasIndex);

  useEffect(() => {
    setCachedValue(currentCanvasIndex + 1);
  }, [currentCanvasIndex]);

  return (
    <FloatingContainerOuter>
      <FloatingContainer>
        <Container>
          <Button $pos="left" onClick={previousCanvas}>
            <ButtonIcon>
              <PrevIcon />
            </ButtonIcon>
            Previous
          </Button>
          <CentralContainer>
            <InputLabel>Page</InputLabel>
            <Input
              type="number"
              value={cachedValue}
              onChange={(e) => setCachedValue(e.currentTarget.valueAsNumber)}
              onBlur={(e) => setCurrentCanvasIndex(e.currentTarget.valueAsNumber - 1)}
            />
            <TextContainer>of</TextContainer>
            <TextContainer>
              <strong>{totalCanvases}</strong>
            </TextContainer>
          </CentralContainer>
          <Button $pos="right" onClick={nextCanvas}>
            Next
            <ButtonIcon>
              <NextIcon />
            </ButtonIcon>
          </Button>
        </Container>
      </FloatingContainer>
    </FloatingContainerOuter>
  );
}
