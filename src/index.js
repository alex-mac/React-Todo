import React from 'react';
import ReactDOM from 'react-dom';
// redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import todoApp from './reducers'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// create a store from the data provideded in the reducers
let store = createStore(todoApp)


ReactDOM.render(
	<Provider state={store}>
		<App />
	</Provider>
, document.getElementById('root'));
registerServiceWorker();
