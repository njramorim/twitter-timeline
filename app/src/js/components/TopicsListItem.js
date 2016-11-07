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
				<a href="#">
					<b>#SegundaDetremuraSDV</b>
					<p>
						<span>8.203 </span>
						Tweets
					</p>
				</a>
			</li>
		)
	}

}