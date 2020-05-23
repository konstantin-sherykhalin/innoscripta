import React 		from "react";
import {Provider}	from 'react-redux';

import Header	from './components/header';
import Menu		from './components/menu';

import store	from './redux';

export default () => (
	<Provider store={store}>
		<div id="container">
			<Header/>
			<Menu/>
		</div>
	</Provider>
);
