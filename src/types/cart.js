import PropTypes from 'prop-types';

const raw_item = PropTypes.shape({
	id:				PropTypes.number,
	number:			PropTypes.number,
});

const filled_item = PropTypes.shape({
	id:				PropTypes.number,
	name:			PropTypes.string,
	description:	PropTypes.string,
	image:			PropTypes.string,
	cost:			PropTypes.number,
	number:			PropTypes.number,
});

const reducer_record = PropTypes.shape({
	list: PropTypes.arrayOf(raw_item),
});
const default_reducer_record = {
	list: [],
}

const types = {
	raw_item,
	filled_item,
	reducer_record,
	default_reducer_record,
};

export default types;
