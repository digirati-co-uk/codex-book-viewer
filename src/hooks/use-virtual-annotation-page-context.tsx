import { Annotation } from '@iiif/presentation-3';
import { AnnotationNormalized, AnnotationPageNormalized } from '@iiif/presentation-3-normalized';
import { useVirtualAnnotationPage, VaultActivatedAnnotation } from 'react-iiif-vault';
import { createContext, useContext, useMemo } from 'react';

const VirtualAnnotationPageContext = createContext<{
  fullPage: AnnotationPageNormalized | null;
  addAnnotation: (
    id: string | Annotation | VaultActivatedAnnotation | AnnotationNormalized,
    atIndex?: number | undefined
  ) => void;
  removeAnnotation: (id: string | Annotation | VaultActivatedAnnotation | AnnotationNormalized) => void;
} | null>(null);

export function useVirtualAnnotationPageContext() {
  const ctx = useContext(VirtualAnnotationPageContext);

  return [
    ctx!.fullPage,
    {
      addAnnotation: ctx!.addAnnotation,
      removeAnnotation: ctx!.removeAnnotation,
    },
  ] as const;
}

export function VirtualAnnotationProvider({ children }: { children: any }) {
  const [fullPage, { addAnnotation, removeAnnotation }] = useVirtualAnnotationPage();

  return (
    <VirtualAnnotationPageContext.Provider
      value={useMemo(() => ({ fullPage, addAnnotation, removeAnnotation }), [fullPage])}
    >
      {children}
    </VirtualAnnotationPageContext.Provider>
  );
}
