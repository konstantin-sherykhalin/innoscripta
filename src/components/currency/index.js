import React		from 'react';
import {connect}	from 'react-redux';

import currency_list from '../../config/currency';

import {change_currency,module_name as currency_module} from '../../redux/reducers/currency';


const mapStateToProps = state => ({
	currency: state[currency_module].currency,
});

const mapDispatchToProps = {change_currency};

const CurrencyComponent = (props) => (
	<div id="currency">
		<p>Currency:</p>
		<select onChange={e => props.change_currency(e.target.value)}>
			{currency_list.map(e => (
				<option key={e.ticker} value={e.ticker} selected={props.currency==e.ticker}>{e.name}</option>
			))}
		</select>
	</div>
);

export default connect(mapStateToProps,mapDispatchToProps)(CurrencyComponent);
