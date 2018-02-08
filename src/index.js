import React from 'react'
import ReactDOM from 'react-dom'
// redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// Reducers
import todoApp from './reducers'

// Actions
import { ADD_TODO } from './actions'

import './index.css'
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker'

// create a store from the data provideded in the reducers
let store = createStore(todoApp)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('root')
);

registerServiceWorker();