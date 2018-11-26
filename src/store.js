import {createStore} from 'redux'
import {artistogramReducer} from './reducers';

export default createStore(artistogramReducer);
