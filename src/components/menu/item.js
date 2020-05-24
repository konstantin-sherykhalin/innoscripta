import React		from 'react';
import PropTypes	from 'prop-types';
import {connect}	from 'react-redux';

import currency_list from '../../config/currency';

import cart_types	from '../../types/cart';

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

const MenuItemComponent = ({data,...props}) => {
	const [remove_button_state,set_remove_button_state] = React.useState(true);

	const on_add	= () => props.add_pizza({id:data.id});
	const on_remove	= () => props.remove_pizza({id:data.id});
	const on_reject	= () => props.reject_pizza({id:data.id});
	const on_number_input = (e) => {
		let number = Math.max(0,e.target.value);
		props.change_number({id:data.id,number});
	}

	const current_currency = currency_list.find(e => e.ticker==props.currency);

	return (
		<div id={'item_'+data.id} className="item">
			<h3>{data.name}</h3>
			<div className="description" style={{backgroundImage:`url(${data.image})`}}>
				<p>{data.description}</p>
			</div>
			<p className="cost">Cost: {Math.round(data.cost/current_currency.rate*100)/100+current_currency.symbol}</p>
			<div className="add_to_cart">
				{data.number ? (
					<>
					<button
						key="first_button"
						className={remove_button_state ? '' : 'fake'}
						onMouseEnter={_ => set_remove_button_state(true)}
						onMouseLeave={_ => set_remove_button_state(false)}
						onClick={on_reject}
					>
						{remove_button_state ? 'Remove from cart' : 'In cart'}
					</button>
					<button onClick={on_remove}>-</button>
					<input type="number" min="0" value={data.number} onInput={on_number_input} />
					<button onClick={on_add}>+</button>
					</>
				) : (
					<button key="first_button" onClick={on_add}>Add to cart</button>
				)}
			</div>
		</div>
	);
}
MenuItemComponent.propTypes = {
	data: cart_types.filled_item,
};

export default connect(mapStateToProps,mapDispatchToProps)(MenuItemComponent);
