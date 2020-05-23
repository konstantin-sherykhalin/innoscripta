import React		from 'react';
import {connect}	from 'react-redux';

import currency_list from '../../config/currency';

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
	const [number,set_number] = React.useState(data.number);
	React.useEffect(_ => set_number(data.number),[data.number]);

	const on_add	= () => props.add({id:data.id});
	const on_remove	= () => props.remove({id:data.id});
	const on_reject	= () => props.reject({id:data.id});
	const on_number_input = (e) => {
		let value = e.target.value;
		set_number(+value);
		props.change_number({id:data.id,number});
	}

	const current_currency = currency_list.find(e => e.ticker==props.currency);

	return (
		<div className="item">
			<h3>{data.name}</h3>
			<div className="description" style={{backgroundImage:`url(${data.image})`}}>
				<p>{data.description}</p>
			</div>
			<p className="cost">Цена: {Math.round(data.cost/current_currency.rate*100)/100+current_currency.symbol}</p>
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
						{remove_button_state ? 'Убрать из корзины' : 'В корзине'}
					</button>
					<button onClick={on_remove}>-</button>
					<input type="number" value={number} onInput={on_number_input} />
					<button onClick={on_add}>+</button>
					</>
				) : (
					<button key="first_button" onClick={on_add}>Добавить к заказу</button>
				)}
			</div>
		</div>
	);
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuItemComponent);
