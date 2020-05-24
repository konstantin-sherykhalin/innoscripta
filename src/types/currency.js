import PropTypes from 'prop-types';

import currency_list from '../config/currency';

const reducer_record = PropTypes.shape({
	currency: PropTypes.oneOf(currency_list.map(e => e.ticker)),
});
const default_reducer_record = {
	currency: 'RUB',
};

const types = {
	reducer_record,
	default_reducer_record,
};

export default types;
