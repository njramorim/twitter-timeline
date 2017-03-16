import React, {Component} from 'react'
import FollowsListItem from './FollowsListItem'
import {getFollows} from './../actions/getFollows'

const FollowsList = React.createClass({
	getInitialState() {
	    return {
	      users: []
	    }
	},


	componentDidMount() {
		getFollows(this)
	},

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
						{this.state.users.map((user , i) => {
							return(
								<FollowsListItem 
									key={i}
									name={user.name}
									link={'http://twiteer.com/'+user.screen_name}
									screen_name={user.screen_name}
									image={user.profile_image_url}
									verified = {user.verified}
	 
								/>
							)
						})}
					</ul>
				</main>
				<footer>
					<a href="#">Encontrar amigos</a>
				</footer>	 
			</div>
		)
	}
})


export default FollowsList