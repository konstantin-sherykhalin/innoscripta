import {all} from 'redux-saga/effects';
import {saga as listSaga} from './reducers/list';

export default function* rootSaga() {
	yield all([
		listSaga(),
	]);
}
