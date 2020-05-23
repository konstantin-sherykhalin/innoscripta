import React		from 'react';
import {connect}	from 'react-redux';

import Spinner from '../../templates/spinner';

import Item from './item';

import {module_name as cart_module}				from '../../redux/reducers/cart';
import {module_name as currency_module}			from '../../redux/reducers/currency';
import {load_list,module_name as list_module}	from '../../redux/reducers/list';


const mapStateToProps = state => ({
	cart:		state[cart_module],
	currency:	state[currency_module].currency,
	data:		state[list_module],
});

const mapDispatchToProps = {
	load_list,
};

const MenuComponent = (props) => {
	let on_refresh = () => null;
	const list = [];

	if(props.data.state == 'initial') {
		if(props.data.error) {
			on_refresh = () => props.load_list();
		} else {
			props.load_list();
		}
	} else if(props.data.state == 'loading') {

	} else if(props.data.state == 'loaded') {
		for(let list_item of props.data.list) {
			let cart_item = props.cart.list.find(e => e.id==list_item.id);
			list.push({
				...list_item,
				...cart_item,
			});
		}
	}

	return (
		<div id="menu">
			{props.data.error ? (
				<div className="error">
					<p>Не удалось загрузить список блюд.</p>
					<p><a href="javascript://" onClick={on_refresh}>Попробовать еще раз</a></p>
				</div>
			) : (props.data.state == 'loading') ? (
				<div className="waiting">
					<Spinner/>
					<p>Загрузка&hellip;</p>
				</div>
			) : (props.data.state == 'loaded') ? (
				list.length
				? list.map(e => (<Item key={e.id} data={e} />))
				: (<p>Доступных пицц нет</p>)
			) : null}
		</div>
	);
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuComponent);
