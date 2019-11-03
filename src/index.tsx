import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";
import {createLogger} from 'redux-logger';
import {applyMiddleware, createStore} from "redux";
import rootReducer, {RootSaga} from "./util/RootSaga";
import {Provider} from 'react-redux'

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(RootSaga);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
