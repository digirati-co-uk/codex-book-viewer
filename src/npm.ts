// The endpoint point for the NPM package.

import { createElement } from 'react';
import { render } from 'react-dom';
import { CodexViewer, CodexViewerProps } from './CodexViewer';

export * from './CodexViewer';

export function create(dom: HTMLElement, props: CodexViewerProps) {
  render(createElement(CodexViewer, props), dom);
}
