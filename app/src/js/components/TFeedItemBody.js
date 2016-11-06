import React, {Component} from 'react'

export default class TFeedItemBody extends Component{
    
	componentWillMount () {

	}

	render () {   
		return (
			<main>
				{this.props.text}
			</main>
		)
	}
}