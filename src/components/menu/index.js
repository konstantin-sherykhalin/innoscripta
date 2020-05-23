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
	let on_refresh = props.load_list;
	const list = [];

	if(props.data.list.length) {
		for(let list_item of props.data.list) {
			let cart_item = props.cart.list.find(e => e.id==list_item.id);
			list.push({
				...list_item,
				...cart_item,
			});
		}
	} else if(props.data.state == 'initial') {
		if(!props.data.error) {
			props.load_list();
		}
	}

	return (
		<div id="menu">
			{props.data.error ? (
				<div className="error">
					<p>Failed to load dishes list.</p>
					<p><a href="javascript://" onClick={on_refresh}>Try again</a></p>
				</div>
			) : (props.data.state == 'loading') ? (
				<div className="waiting">
					<Spinner/>
					<p>Loading&hellip;</p>
				</div>
			) : (props.data.state == 'loaded') ? (
				list.length
				? list.map(e => (<Item key={e.id} data={e} />))
				: (<p>No pizzas available</p>)
			) : null}
		</div>
	);
}

export default connect(mapStateToProps,mapDispatchToProps)(MenuComponent);
