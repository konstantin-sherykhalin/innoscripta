import {combineReducers} from 'redux';

import {initial} from '../initial';

import cart,		{module_name as cart_module}		from './cart';
import currency,	{module_name as currency_module}	from './currency';

export default combineReducers({
	// data: (state=initial) => state,
	[cart_module]:		cart,
	[currency_module]:	currency,
});
