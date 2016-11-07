import axios from 'axios'
import {mockedUsers} from './mockedUsers'

const sname = 'americanascom'

export function getFollows(el){

	axios.get('serv/get_twitter.php', {
	    params: {
	    	get_follows: true,
	    	screen_name: 'americanascom',
	    	count: 3
	    }
	    
	}).then(function (result){
		// console.log(result)
		let rd = result.data.users
		// console.log(rd)

		if (rd === undefined){
			return(
				el.setState({
					users: mockedUsers
				})
			)
		} 
		

		return (
			el.setState({
				users: rd
			})
		)

	})

}