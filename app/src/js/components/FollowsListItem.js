import React, {Component} from 'react'

export default class FollowsListItem extends Component {
	constructor(props){
		super(props)
	}


	componentDidMount() {

	}

	render() {
		return(
			<li className="followsItem">
				<figure>
					<a href={this.props.link} target="_blank">
						<img src={this.props.image} />
						<figcaption>
							<b>{this.props.name}</b>
							<i className={this.props.verified}></i>
							<span>{this.props.screen_name}</span>
						</figcaption>
					</a>	
				</figure>	

				<button className="close">Remover</button>
				<button className="seguir">Seguir</button>
			</li>
		)
	}

}