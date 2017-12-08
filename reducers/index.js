import { combineReducers } from 'redux'
import * as actions from '../actions'

function deck(state=[], action){
	console.log('action',action, state, actions.INSERT)
	switch(action.type){

		case actions.INSERT:
			return state

		default:
			return state
	}
}


export default combineReducers({
	deck
})