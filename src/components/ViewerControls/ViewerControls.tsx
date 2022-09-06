import { useCanvas, useExternalManifest, useManifest, useSimpleViewer } from 'react-iiif-vault';
import {
  ButtonIcon,
  Button,
  InputLabel,
  TextContainer,
  Container,
  CentralContainer,
  FloatingContainer,
  FloatingContainerOuter,
} from './ViewerControls.styles';
import { PrevIcon } from '../../icons/PrevIcon';
import { NextIcon } from '../../icons/NextIcon';
import { useEffect, useLayoutEffect, useState } from 'react';

interface ViewerControlsProps {
  initCanvas: number;
}

export function ViewerControls(props: ViewerControlsProps) {
  const canvas = useCanvas();
  const currentManifest = useManifest();
  const { manifest, isLoaded } = useExternalManifest(currentManifest.id);
  const { totalCanvases, setCurrentCanvasIndex, nextCanvas, previousCanvas } = useSimpleViewer();
  const [cachedFolio, setCachedFolio] = useState(null);

  useLayoutEffect(() => {
    setCurrentCanvasIndex(props.initCanvas);
  }, [props.initCanvas]);

  useEffect(() => {
    canvas ? setCachedFolio(canvas.metadata[2].value.en[0]) : '';
  }, [canvas]);

  if (!manifest || !isLoaded) {
    return <div>Loading...</div>;
  }

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
