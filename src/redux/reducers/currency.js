import config		from '../../config';

// Structure
export const ReducerRecord = () => ({
	currency: 'RUB',
});

// Consts
export const module_name = 'currency';

export const CHANGE = config.name+'/'+module_name+'/CHANGE';

// Reducer
export default function reducer(st = ReducerRecord(),action) {
	const {type,payload,error} = action;

	switch(type) {
		case CHANGE: return {currency:payload};
	}

	return st;
}

// Actions
export const change_currency = (payload) => ({type:CHANGE,payload});
