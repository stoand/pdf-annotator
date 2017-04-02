import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import * as React from 'react';

import { commentsReducer } from './comment/comment.red';
import { pdfReducer } from './pdf-toolbar/pdf-toolbar.red';

import { PdfToolbar } from './pdf-toolbar/pdf-toolbar';

import './app.less';

let store = createStore(combineReducers({
    comments: commentsReducer,
    pdf: pdfReducer,
}))

render(PdfToolbar(), document.querySelector('body'))