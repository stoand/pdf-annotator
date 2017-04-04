import 'es6-promise';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import { commentsReducer } from './comment/comment.reducers';
import { pdfReducer } from './pdf-toolbar/pdf-toolbar.reducers';

import { PdfToolbar } from './pdf-toolbar/pdf-toolbar';

import './app.less';

const store = createStore(combineReducers({
    comments: commentsReducer,
    pdf: pdfReducer,
}));

const root = document.createElement('div');
document.body.appendChild(root);
render(PdfToolbar(), root);
