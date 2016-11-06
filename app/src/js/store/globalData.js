import { createStore } from 'redux'
import {twitterInfos} from './../actions/twitterInfos'

export function globalData(info, param, el){

	const reducer = function (state, action) {
		if(action.type === 'INC'){
			return state+action.payload
		}else if(action.type === 'DEC'){
			return state-action.payload
		}

		return state

	}

	const storeTweets = createStore(reducer, 0);

	storeTweets.subscribe(() => {
		console.log('store changes! ', storeTweets.getState())
	})

	storeTweets.dispatch({type: 'INC', payload: 1})
	storeTweets.dispatch({type: 'INC', payload: 2})
	storeTweets.dispatch({type: 'INC', payload: 22})
	storeTweets.dispatch({type: 'DEC', payload: 22})

	return storeTweets.getState()


}