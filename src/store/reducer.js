// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
import { reducer as loginReducer } from './login';
import { reducer as tableReducer } from './table';

const reducer = combineReducers({
	login: loginReducer,
	project: tableReducer,
});

export default reducer;