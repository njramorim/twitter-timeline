import React, {Component} from 'react'
import FollowsListItem from './FollowsListItem'

export default class FollowsList extends Component {
	constructor(props){
		super(props)
	}


	componentDidMount() {

	}

	render() {
		return(
			<div className="followers side-box">
				<header>
					<h3>Quem seguir</h3>
					<span> · </span>
					<a href="#">Atualizar</a>					
					<span> · </span>
					<a href="#">Ver todos</a>
				</header>
				<main>
					<ul>
						<FollowsListItem />
						<FollowsListItem />
						<FollowsListItem />
					</ul>
				</main>
				<footer>
					<a href="#">Encontrar amigos</a>
				</footer>	 
			</div>
		)
	}

}