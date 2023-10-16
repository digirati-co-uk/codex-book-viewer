import { render } from 'react-dom';
import { App } from './App';
import './i18n';

const $el = document.getElementById('viewer');

render(<App />, $el);
