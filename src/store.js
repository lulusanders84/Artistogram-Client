import {createStore, applyMiddleware} from 'redux'
import {artistogramReducer} from './reducers';
import thunk from 'redux-thunk';

export default createStore(artistogramReducer, applyMiddleware(thunk));
