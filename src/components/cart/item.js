import React		from 'react';
import PropTypes	from 'prop-types';
import {connect}	from 'react-redux';

import currency_list from '../../config/currency';

import cart_types from '../../types/cart';

import {
	add_pizza,
	change_number,
	remove_pizza,
	reject_pizza,
	module_name as cart_module
} from '../../redux/reducers/cart';
import {change_currency,module_name as currency_module} from '../../redux/reducers/currency';


const mapStateToProps = state => ({
	currency: state[currency_module].currency,
});

const mapDispatchToProps = {
	add_pizza,
	change_number,
	remove_pizza,
	reject_pizza,
};

const CartItemComponent = ({data,...props}) => {
	const [hover,set_hover] = React.useState(false);

	const on_number_input = (e) => {
		let number = Math.max(0,e.target.value);
		props.change_number({id:data.id,number});
	}
	const on_reject	= () => props.reject_pizza({id:data.id});

	const current_currency = currency_list.find(e => e.ticker==props.currency);

	return (
		<>
		<div className={'item '+(hover ? 'lighted' : '')}>
			<div className="name">{data.name}</div>
			<div className="number"><input type="number" min="0" value={data.number} onInput={on_number_input} /> pcs</div>
			<div className="price">{Math.round(data.cost*data.number/current_currency.rate*100)/100}{current_currency.symbol}</div>
			<div className="remove">
				<button
					className="secondary"
					onMouseEnter={_ => set_hover(true)}
					onMouseLeave={_ => set_hover(false)}
					onClick={on_reject}
				>
					X
				</button>
			</div>
		</div>
		<div className="delimeter" />
		</>
	);
}
CartItemComponent.propTypes = {
	data: cart_types.filled_item,
};

export default connect(mapStateToProps,mapDispatchToProps)(CartItemComponent);
