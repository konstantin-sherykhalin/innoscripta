import React		from 'react';
import {connect}	from 'react-redux';

import join_menu_cart from '../../services/join_menu_cart';

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
	cart:		state[cart_module],
	currency:	state[currency_module].currency,
	data:		state[list_module],
});

const mapDispatchToProps = {
	add_pizza,
	change_number,
	remove_pizza,
	reject_pizza,
	change_currency,
};

const CartComponent = (props) => {
	const overall_number = props.cart.list.reduce((s,c) => s+c.number,0)
	const list = join_menu_cart({menu:props.data.list,cart:props.cart.list}).filter(e => e.number>0);

	return overall_number>0 ? (
		<div id="cart">
			<h2>Confirm your order</h2>
			<div className="table">
				{list.map(e => (
					<Item
						key={e.id}
						data={e}
					/>
				))}
			</div>
			<div className="accept">
				<button>Accept</button>
			</div>
		</div>
	) : null;
}

export default connect(mapStateToProps,mapDispatchToProps)(CartComponent);
