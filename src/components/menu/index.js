import React		from 'react';
import {connect}	from 'react-redux';

import Item from './item';

import {module_name as cart_module}		from '../../redux/reducers/cart';
import {module_name as currency_module}	from '../../redux/reducers/currency';
import {module_name as list_module}		from '../../redux/reducers/list';


const mapStateToProps = state => ({
	cart:		state[cart_module].list,
	currency:	state[currency_module].currency,
	list:		state[list_module].list,
});

const MenuComponent = (props) => {
	const list = [];
	for(let list_item of props.list) {
		let cart_item = props.cart.find(e => e.id==list_item.id);
		list.push({
			...list_item,
			...cart_item,
		});
	}

	return (
		<div id="menu">
			{list.map(e => (<Item key={e.id} data={e} />))}
		</div>
	);
}

export default connect(mapStateToProps)(MenuComponent);
