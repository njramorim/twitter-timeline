import React, {Component} from 'react'

export default class TopicsListItem extends Component {
	constructor(props){
		super(props)
	}


	componentDidMount() {

	}

	render() {
		return(
			<li className="topicsItem">
				<a href={this.props.link}>
					<b>{this.props.name}</b>
					<p>
						<span>{this.props.tweet_volume}</span>
					</p>
				</a>
			</li>
		)
	}

}