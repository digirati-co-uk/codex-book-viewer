import { useCanvas, useManifest, useSimpleViewer, useVisibleCanvases } from 'react-iiif-vault';
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

interface ViewerControlsProps {
  initCanvas: number;
}

export function ViewerControls(props: ViewerControlsProps) {
  const canvas = useCanvas();
  const { totalCanvases, setCurrentCanvasIndex, nextCanvas, previousCanvas } = useSimpleViewer();
  const [cachedFolio, setCachedFolio] = useState(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (async () => {
      await props;
      setCurrentCanvasIndex(props.initCanvas);
    })();
  }, []);

  useEffect(() => {
    canvas ? setCachedFolio(canvas.metadata[2].value.en[0]) : '';
  }, [canvas]);

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
            <InputLabel>Folio </InputLabel>
            <InputLabel>{cachedFolio}</InputLabel>
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
