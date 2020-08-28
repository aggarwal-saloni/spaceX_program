import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

const store = configureStore()


ReactDOM.render(
	<Provider store={store}>
		<Dashboard />
	</Provider>,
	document.getElementById('root')
);

