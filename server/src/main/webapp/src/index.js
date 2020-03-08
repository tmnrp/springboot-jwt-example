import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './app/reducers';
import App from './app/App';

ReactDOM.render(
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
        <App />
    </Provider>,
    document.querySelector('#root')
);