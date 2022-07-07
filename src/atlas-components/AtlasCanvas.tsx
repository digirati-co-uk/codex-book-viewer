import {
  useCanvas,
  useResourceEvents,
  useRenderingStrategy,
  useThumbnail,
  useVault,
  ChoiceDescription,
  StrategyActions,
} from 'react-iiif-vault';
import { createStylesHelper } from '@iiif/vault-helpers';
// import { RenderAnnotationPage } from "../RenderAnnotationPage/RenderAnnotationPage";
import { Image } from './Image';
import { FC, Fragment, useEffect, useLayoutEffect, useMemo } from 'react';
import { useVirtualAnnotationPageContext } from '../hooks/use-virtual-annotation-page-context';

export const AtlasCanvas: FC<{
  x?: number;
  y?: number;
  onCreated?: any;
  onChoiceChange?: (choice?: ChoiceDescription) => void;
  registerActions?: (actions: StrategyActions) => void;
  defaultChoices?: Array<{ id: string; opacity?: number }>;
  isStatic?: boolean;
}> = ({ x, y, onChoiceChange, registerActions, defaultChoices, isStatic }) => {
  const canvas = useCanvas();
  const elementProps = useResourceEvents(canvas, ['deep-zoom']);
  const [virtualPage] = useVirtualAnnotationPageContext();
  const vault = useVault();
  const helper = useMemo(() => createStylesHelper(vault), [vault]);
  const [strategy, actions] = useRenderingStrategy({
    strategies: ['images'],
    defaultChoices: defaultChoices?.map(({ id }) => id),
  });
  const choice = strategy.type === 'images' ? strategy.choice : undefined;

  useEffect(() => {
    if (registerActions) {
      registerActions(actions);
    }
  }, [strategy.annotations]);

  useEffect(() => {
    if (defaultChoices) {
      for (const choice of defaultChoices) {
        if (typeof choice.opacity !== 'undefined') {
          helper.applyStyles({ id: choice.id }, 'atlas', {
            opacity: choice.opacity,
          });
        }
      }
    }
  }, [defaultChoices]);

  useLayoutEffect(() => {
    if (onChoiceChange) {
      onChoiceChange(choice);
    }
  }, [choice]);

  const thumbnail = useThumbnail({ maxWidth: 256, maxHeight: 256 });

  if (!canvas) {
    return null;
  }

  if (strategy.type === 'unknown') {
    if (thumbnail && thumbnail.type === 'fixed') {
      return (
        <world-object height={canvas.height} width={canvas.width} x={x} y={y}>
          <world-image
            uri={thumbnail.id}
            target={{ x: 0, y: 0, width: canvas.width, height: canvas.height }}
            display={
              thumbnail.width && thumbnail.height
                ? {
                    width: thumbnail.width,
                    height: thumbnail.height,
                  }
                : undefined
            }
          />
        </world-object>
      );
    }

    throw new Error('Unknown image strategy');
  }

  const annotations = (
    <Fragment>
      {/*{virtualPage ? <RenderAnnotationPage page={virtualPage} /> : null}*/}
      {/*{strategy.annotations && strategy.annotations.pages*/}
      {/*  ? strategy.annotations.pages.map((page) => {*/}
      {/*      return <RenderAnnotationPage key={page.id} page={page} />;*/}
      {/*    })*/}
      {/*  : null}*/}
    </Fragment>
  );

  return (
    <world-object key={strategy.type} height={canvas.height} width={canvas.width} x={x} y={y} {...elementProps}>
      {strategy.type === 'images'
        ? strategy.images.map((image, idx) => {
            return (
              <Image
                isStatic={isStatic}
                key={image.id}
                image={image}
                id={image.id}
                thumbnail={idx === 0 ? thumbnail : undefined}
                annotations={annotations}
              />
            );
          })
        : null}
      {/* This is required to fix a race condition. */}
    </world-object>
  );
};
