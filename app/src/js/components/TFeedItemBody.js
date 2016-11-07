import React, {Component} from 'react'

export default class TFeedItemBody extends Component{
    
	componentWillMount () {

	}

	render () {   
		return (
			<main className="postagem">
				<p>
					{this.props.text}
				</p>
			</main>
		)
	}
}