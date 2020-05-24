import config	from '../../config';
import types	from '../../types/menu';

/**
 * Structure
 */
export const ReducerRecord = () => types.default_reducer_record;

/**
 * Consts
 */
export const module_name = 'cart';

export const ADD		= config.name+'/'+module_name+'/ADD';
export const SET_NUMBER	= config.name+'/'+module_name+'/SET_NUMBER';
export const REMOVE		= config.name+'/'+module_name+'/REMOVE';
export const REMOVE_ALL	= config.name+'/'+module_name+'/REMOVE_ALL';

/**
 * Reducer
 */
export default function reducer(st = ReducerRecord(),action) {
	const {type,payload,error} = action;

	switch(type) {
		case ADD:
			let already_added = st.list.find(e => e.id==payload.id);
			if(already_added)	return {list:st.list.map(e => e.id==payload.id ? {...e,number:e.number+1} : e)};
			else				return {list:[...st.list,{...payload,number:1}]};

		case SET_NUMBER:
			return {list:st.list.map(e => e.id==payload.id ? {...e,number:payload.number} : e)};

		case REMOVE:
			let record = st.list.find(e => e.id==payload.id);
			if(record.number>0) return {list:st.list.map(e => e.id==payload.id ? {...e,number:e.number-1} : e)};

		case REMOVE_ALL:
			return {list:st.list.filter(e => e.id!=payload.id)};
	}

	return st;
}

/**
 * Actions
 */
export const add_pizza		= (payload) => ({type:ADD,			payload});
export const change_number	= (payload) => ({type:SET_NUMBER,	payload});
export const remove_pizza	= (payload) => ({type:REMOVE,		payload});
export const reject_pizza	= (payload) => ({type:REMOVE_ALL,	payload});
