import React		from 'react';
import {connect}	from 'react-redux';

import currency_list from '../../config/currency';

import join_menu_cart from '../../services/join_menu_cart';

import {module_name as cart_module}						from '../../redux/reducers/cart';
import {change_currency,module_name as currency_module}	from '../../redux/reducers/currency';
import {module_name as list_module}						from '../../redux/reducers/list';


const mapStateToProps = state => ({
	cart:		state[cart_module],
	currency:	state[currency_module].currency,
	data:		state[list_module],
});

const mapDispatchToProps = {change_currency};

const CurrencyComponent = (props) => {
	const [show_button,set_show_button] = React.useState(true);
	const go_to_cart = () => document.getElementById('cart').scrollIntoView({behavior:'smooth'});

	const current_currency = currency_list.find(e => e.ticker==props.currency);
	const price = (
		join_menu_cart({menu:props.data.list,cart:props.cart.list})
			.reduce((sum,row) => sum+row.cost*row.number,0)
		/current_currency.rate
	);

	React.useEffect(_ => {
		if(price<=0) return;

		const on_scroll = (e) => {
			const cart = document.getElementById('cart');
			if(!cart) return;

			const pos = cart.getBoundingClientRect().top;
			if( show_button && pos < window.innerHeight/2) set_show_button(false);
			if(!show_button && pos > window.innerHeight/2) set_show_button(true);
		}

		window.addEventListener('scroll',on_scroll);
		return () => window.removeEventListener('scroll',on_scroll);
	},[show_button,price]);

	return (props.data.state == 'loaded') ? (
		<div id="short_cart">
			<div id="currency">
				<p>Currency:</p>
				<select value={props.currency} onChange={e => props.change_currency(e.target.value)}>
					{currency_list.map(e => (
						<option key={e.ticker} value={e.ticker}>{e.name}</option>
					))}
				</select>
			</div>
			{price>0 && (
				<div id="cart_summary" className={show_button ? '' : 'hidden'}>
					<p>Order price: {Math.round(price*100)/100}{current_currency.symbol}</p>
					<button onClick={go_to_cart}>Go to cart</button>
				</div>
			)}
		</div>
	) : null
}

export default connect(mapStateToProps,mapDispatchToProps)(CurrencyComponent);
