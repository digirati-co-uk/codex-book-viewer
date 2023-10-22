import { useCanvas, useManifest, useSimpleViewer } from 'react-iiif-vault';
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
import { Spinner } from '../Skeleton'
import { PrevIcon } from '../../icons/PrevIcon';
import { NextIcon } from '../../icons/NextIcon';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function ViewerControls() {
  const canvas = useCanvas();
  const manifest = useManifest();
  const { items, nextCanvas, previousCanvas } = useSimpleViewer();
  const totalCanvases = items.length;
  const [cachedFolio, setCachedFolio] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    try {
      if (canvas && canvas.metadata[2] && canvas.metadata[2].value && canvas.metadata[2].value.en) {
        setCachedFolio(canvas.metadata[2].value.en[0] as any);
      }
    } catch (e) {
      // nothing.
    }
  }, [canvas]);

  if (!manifest) {
    return <Spinner />
  }

  return (
    <FloatingContainerOuter>
      <FloatingContainer>
        <Container>
          <Button $pos="left" onClick={previousCanvas}>
            <ButtonIcon>
              <PrevIcon />
            </ButtonIcon>
            {t('previous')}
          </Button>
          <CentralContainer>
            <InputLabel>Folio </InputLabel>
            <InputLabel>{cachedFolio}</InputLabel>
            <TextContainer>
              {t('of')}
            </TextContainer>
            <TextContainer>
              <strong>{totalCanvases}</strong>
            </TextContainer>
          </CentralContainer>
          <Button $pos="right" onClick={nextCanvas}>
            {t('next')}
            <ButtonIcon>
              <NextIcon />
            </ButtonIcon>
          </Button>
        </Container>
      </FloatingContainer>
    </FloatingContainerOuter>
  );
}
