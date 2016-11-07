import React, {Component} from 'react'

export default class TFeedItemBody extends Component{
    
	componentWillMount () {

	}

	render () {   
		return (
			<main className="postagem">
				<p 
					dangerouslySetInnerHTML={{ __html: this.props.text}}
				/
				>
			</main>
		)
	}
}