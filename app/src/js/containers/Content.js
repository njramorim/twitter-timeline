import React, {Component, PropTypes} from 'react'
import ContentSummary from './../components/ContentSummary'
import TwitFeed from './../components/TwitFeed'


export default class Content extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="contentWrapper">
				<div>
					<section>
						<ContentSummary />
					</section>
					<section>
						<TwitFeed screen_name="americanascom" count="10"/>
					</section>
					<section>
						barra right
					</section>
				</div>
			</div>
		)
	}
}
