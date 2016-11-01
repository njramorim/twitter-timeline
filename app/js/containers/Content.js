import React, {Component, PropTypes} from 'react'
import ContentSummary from './../components/ContentSummary'


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
						barra meio
					</section>
					<section>
						barra right
					</section>
				</div>
			</div>
		)
	}
}
