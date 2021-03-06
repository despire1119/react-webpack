import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {routerReducer} from 'react-router-redux';
import * as rootReducer from '../reducers';

// console.dir('crootReducer')
// console.dir(combineReducers({
// 		    ...rootReducer,
// 		    routing: routerReducer
// 		}))


export default function configureStore(initialState) {
 	const store = createStore(
	  	combineReducers({
		    // ...rootReducer,
		    routing: routerReducer
		}),
	  	initialState,
	  	applyMiddleware(thunkMiddleware, createLogger())
	);
  	return store;
}
