import axios from 'axios'
import {mockedTrends} from './mockedTrends'

const sname = 'americanascom'

export function getTrends(el){

	axios.get('serv/get_twitter.php', {
	    params: {
	    	get_trends: true,
	    	id: 23424768

	    }
	    
	}).then(function (result) {
		let rd = result.data
		console.log('tredns: ', result.data )
		if (rd === undefined){
			return(
				el.setState({
					trends: mockedTrends
				})
			)

		}

		let rd10 = rd[0].trends.splice(0,9)
		return(
			el.setState({
				trends: rd10
			})
		)



	})


}