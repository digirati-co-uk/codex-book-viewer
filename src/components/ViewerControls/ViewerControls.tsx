import { useCanvas, useManifest, useSimpleViewer, useVisibleCanvases } from "react-iiif-vault";
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
  const manifest = useManifest();
  const { totalCanvases, currentCanvasIndex, setCurrentCanvasIndex, nextCanvas, previousCanvas } = useSimpleViewer();
  // const [cachedValue, setCachedValue] = useState(currentCanvasIndex);
  const [cachedFolio, setCachedFolio] = useState(null);

  useEffect(() => {
    canvas ? setCachedFolio(canvas.metadata[2].value.en[0]) : '';
  }, [canvas]);

  useEffect(() => {
    setCurrentCanvasIndex(props.initCanvas);
  }, []);

  // useEffect(() => {
  //   setCachedValue(currentCanvasIndex + 1);
  // }, [currentCanvasIndex]);

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
            {/*<Input*/}
            {/*  type="text"*/}
            {/*  value={cachedFolio}*/}
            {/*  onChange={(e) => setCachedFolio(e.currentTarget)}*/}
            {/*  onBlur={(e) => setCurrentCanvasIndex(e.currentTarget.valueAsNumber - 1)}*/}
            {/*/>*/}
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
