import React		from 'react';
import {connect}	from 'react-redux';

import currency_list from '../../config/currency';

import {change_currency,module_name as currency_module}	from '../../redux/reducers/currency';
import {module_name as list_module}						from '../../redux/reducers/list';


const mapStateToProps = state => ({
	currency:	state[currency_module].currency,
	data:		state[list_module],
});

const mapDispatchToProps = {change_currency};

const CurrencyComponent = (props) => (
	(props.data.state == 'loaded') ? (
		<div id="currency">
			<p>Currency:</p>
			<select value={props.currency} onChange={e => props.change_currency(e.target.value)}>
				{currency_list.map(e => (
					<option key={e.ticker} value={e.ticker}>{e.name}</option>
				))}
			</select>
		</div>
	) : null
);

export default connect(mapStateToProps,mapDispatchToProps)(CurrencyComponent);
