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
import { useEffect, useState } from 'react';
import { LocaleString } from '@iiif/vault-helpers/react-i18next';

export function ViewerControls() {
  const canvas = useCanvas();

  const manifest = useManifest();
  const { items, nextCanvas, previousCanvas } = useSimpleViewer();
  const totalCanvases = items.length;
  const [cachedFolio, setCachedFolio] = useState(null);

  const prev_lang = { en: ['Previous'], es: ['Anterior'] };
  const next_lang = { en: ['Next'], es: ['Siguiente'] };
  const of_lang = { en: ['of'], es: ['de'] };

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
            <LocaleString>{prev_lang}</LocaleString>
          </Button>
          <CentralContainer>
            <InputLabel>Folio </InputLabel>
            <InputLabel>{cachedFolio}</InputLabel>
            <TextContainer>
              <LocaleString>{of_lang}</LocaleString>
            </TextContainer>
            <TextContainer>
              <strong>{totalCanvases}</strong>
            </TextContainer>
          </CentralContainer>
          <Button $pos="right" onClick={nextCanvas}>
            <LocaleString>{next_lang}</LocaleString>
            <ButtonIcon>
              <NextIcon />
            </ButtonIcon>
          </Button>
        </Container>
      </FloatingContainer>
    </FloatingContainerOuter>
  );
}
