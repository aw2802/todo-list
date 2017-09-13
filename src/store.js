import { createStore } from 'redux'
import rootReducer from './reducers/index'

const defaultState ={
	todos: []
}

const store = createStore(rootReducer, defaultState);

export default store;

