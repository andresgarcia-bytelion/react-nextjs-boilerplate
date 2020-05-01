import loggedReducer from './login-status'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
	logged: loggedReducer
})

export default allReducers