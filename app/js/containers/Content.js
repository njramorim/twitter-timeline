import React, {Component, PropTypes} from 'react'


export default class Content extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="contentWrapper">
				<section>
					barra left
				</section>
				<section>
					barra meio
				</section>
				<section>
					barra right
				</section>
			</div>
		)
	}
}
