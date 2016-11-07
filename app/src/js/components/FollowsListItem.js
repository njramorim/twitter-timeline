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
					<a href="#">
						<img src="https://pbs.twimg.com/profile_images/717052832973774850/RdeLXx3o_normal.jpg" />
						<figcaption>
							<b>Marcelo Tas</b>
							<i></i>
							<span>MarceloTacsifer</span>
						</figcaption>
					</a>	
				</figure>	

				<button className="close">Remover</button>
				<button className="seguir">Seguir</button>
			</li>
		)
	}

}