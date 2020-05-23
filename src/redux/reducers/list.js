import {all,put,call,takeEvery,takeLatest,select} from 'redux-saga/effects';

import config	from '../../config';
import API		from '../../services/api';

// Structure
export const ReducerRecord = () => ({
	state: 'initial',
	error: null,
	list: [
		/*
		{
			id: number
			name: string
			description: string
			image: string,
			cost: number
		},
		*/
	],
});

// Consts
export const module_name = 'list';

export const LOAD_START		= config.name+'/'+module+'/LOAD_START';
export const LOAD_SUCCESS	= config.name+'/'+module+'/LOAD_SUCCESS';
export const LOAD_ERROR		= config.name+'/'+module+'/LOAD_ERROR';

// Reducer
export default function reducer(st = ReducerRecord(),action) {
	const {type,payload,error} = action;

	switch(type) {
		case LOAD_START:	return {...st,state:'loading',error:null};
		case LOAD_SUCCESS:	return {...st,state:'loaded',list:payload};
		case LOAD_ERROR:	return {...st,state:'initial',error};
	}

	return ReducerRecord();
}

// Actions
export const load_list = (payload) => ({type:LOAD_START,payload});

// Sagas
export const load_list_saga = function*({payload}) {
	let {response,error} = yield API('/pizza/list',{offset:0,limit:20});
	if (response) {
        yield put({type:LOAD_SUCCESS,payload:response.list});
    }
    if (error) {
        console.log(error);
        yield put({type:LOAD_ERROR,error});
    }
}

export const saga = function*() {
	yield all([
		takeLatest(LOAD_START,load_list_saga),
		// ...
	]);
};
