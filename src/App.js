import React 		from "react";
import {Provider}	from 'react-redux';

import Header		from './components/header';
import Menu			from './components/menu';
import Cart			from './components/cart';
import CartSummary	from './components/cart_summary';

import store		from './redux';

export default () => (
	<div id="container">
		<Provider store={store}>
			<Header/>
			<Menu/>
			<Cart/>
			<CartSummary/>
		</Provider>
	</div>
);
