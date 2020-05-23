import config		from '../../config';

// Structure
export const ReducerRecord = () => ({
	list: [
		/*
		{
			id: number
			name: string,
			description: string,
			image: string,
			cost: number,
			number: number,
		},
		*/
	],
});

// Consts
export const module_name = 'cart';

export const ADD		= config.name+'/'+module+'/ADD';
export const REMOVE		= config.name+'/'+module+'/REMOVE';
export const REMOVE_ALL	= config.name+'/'+module+'/REMOVE_ALL';

// Reducer
export default function reducer(st = ReducerRecord(),action) {
	const {type,payload,error} = action;

	switch(type) {
		case ADD:
			let already_added = st.list.find(e => e.id==payload.id);
			if(already_added)	return {list:st.list.map(e => e.id==payload.id ? {...e,number:e.number+1} : e)};
			else				return {list:[...st.list,payload]};

		case REMOVE:
			let record = st.list.find(e => e.id==payload.id);
			if(record.number>0) return {list:st.list.map(e => e.id==payload.id ? {...e,number:e.number-1} : e)};

		case REMOVE_ALL:
			return {list:st.list.filter(e => e.id!=payload.id)};
	}

	return ReducerRecord();
}

// Actions
export const add_pizzed		= (payload) => ({type:ADD,			payload});
export const remove_pizza	= (payload) => ({type:REMOVE,		payload});
export const reject_pizza	= (payload) => ({type:REMOVE_ALL,	payload});
