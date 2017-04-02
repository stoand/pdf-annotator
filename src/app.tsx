import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import * as React from 'react';

import { commentsReducer } from './comment/comment.red';
import { pdfReducer } from './pdf-toolbar/pdf-toolbar.red';

let store = createStore(combineReducers({
    comments: commentsReducer,
    pdf: pdfReducer,
}))

render(<div>asdf</div>, document.querySelector('body'))