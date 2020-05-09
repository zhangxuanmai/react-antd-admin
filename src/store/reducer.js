// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import { reducer as loginReducer } from './login';

const reducer = combineReducers({
	login: loginReducer
});

export default reducer;