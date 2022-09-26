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
  initCanvas: string;
}

export function ViewerControls(props: ViewerControlsProps) {
  const canvas = useCanvas();
  const currentManifest = useManifest();
  const { manifest, isLoaded } = useExternalManifest(currentManifest.id);
  const { totalCanvases, setCurrentCanvasId, nextCanvas, previousCanvas } = useSimpleViewer();
  const [cachedFolio, setCachedFolio] = useState(null);

  // useLayoutEffect(() => {
  //   setCurrentCanvasId(props.initCanvas)
  // }, [props.initCanvas]);

  useEffect(() => {
    if (canvas && canvas.metadata[2] && canvas.metadata[2].value.en) {
      setCachedFolio(canvas.metadata[2].value.en[0] as any);
    }
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
