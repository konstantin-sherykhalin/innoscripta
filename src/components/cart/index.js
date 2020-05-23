import React		from 'react';
import {connect}	from 'react-redux';

import Item from './item';

import {
	add_pizza,
	remove_pizza,
	reject_pizza,
	module_name as cart_module
} from '../../redux/reducers/cart';
import {change_currency,module_name as currency_module} from '../../redux/reducers/currency';
import {load_list,module_name as list_module} from '../../redux/reducers/list';

const mapStateToProps = state => ({
	cart:		state[cart_module].list,
	currency:	state[currency_module].currency,
	list:		state[list_module].list,
});

const mapDispatchToProps = {
	add_pizza,
	remove_pizza,
	reject_pizza,
	change_currency,
};

const MenuComponent = (props) => {
	const list = [];
	for(let cart_item of props.cart) {
		let list_item = props.list.find(e => e.id==cart_item.id);
		list.push({
			...list_item,
			...cart_item,
		});
	}

	return (
		<div className="cart">
			{list.map(e => (
				<Item
					key={e.id}
					data={e}
				/>
			))}
		</div>
	);
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuComponent);