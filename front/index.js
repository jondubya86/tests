//React library
import React from 'react';
import {render} from 'react-dom';

//React-redux library
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';
import toDoApp from './reducers';

let store = createStore(toDoApp);

render(
	<Provider store ={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);