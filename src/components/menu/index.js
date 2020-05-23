import React		from 'react';
import {connect}	from 'react-redux';

import Item from './item';

import {
	add_pizza,
	change_number,
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
	change_number,
	remove_pizza,
	reject_pizza,
	change_currency,
	load_list,
};

const MenuComponent = (props) => {
	const list = [];
	for(let list_item of props.list) {
		let cart_item = props.cart.find(e => e.id==list_item.id);
		list.push({
			...list_item,
			...cart_item,
		});
	}
	console.log(props);

	return (
		<div className="menu">
			{list.map(e => (
				<Item
					key={e.id}
					data={e}

					add={props.add_pizza}
					remove={props.remove_pizza}
					reject={props.reject_pizza}
					change_number={props.change_number}
				/>
			))}
		</div>
	);
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuComponent);
