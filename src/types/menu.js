import PropTypes from 'prop-types';

const item = PropTypes.shape({
	id:				PropTypes.number,
	name:			PropTypes.string,
	description:	PropTypes.string,
	image:			PropTypes.string,
	cost:			PropTypes.number,
});

const reducer_record = PropTypes.shape({
	state: PropTypes.oneOf([
		'initial',
		'loading',
		'loaded',
	]),
	error: PropTypes.oneOfType([
		PropTypes.object,
		PropTypes.null,
	]),
	list: PropTypes.arrayOf(item),
});
const default_reducer_record = {
	state: 'initial',
	error: null,
	list: [],
};

const types = {
	item,
	reducer_record,
	default_reducer_record,
};

export default types;
