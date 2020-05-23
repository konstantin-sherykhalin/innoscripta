import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(reducers,enhancer);

sagaMiddleware.run(rootSaga);

export default store;
