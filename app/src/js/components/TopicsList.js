import React, {Component} from 'react'
import TopicsListItem from './TopicsListItem'
import {getTrends} from './../actions/getTrends'

const TopicsList = React.createClass({
	getInitialState() {
	    return {
	      trends: []
	    }
	},


	componentDidMount() {
		getTrends(this)
	},

	render() {
		return(
			<div className="topics side-box">
				<header>
					<h3>Assuntos do momento</h3>
					<span> · </span>
					<a href="#">Alterar</a>		
				</header>
				<main>
					<ul>
						{this.state.trends.map((trend , i) => {
							return(
								<TopicsListItem 
									key={i}
									link={trend.url}
									name={trend.name}
									tweet_volume={trend.tweet_volume != null? trend.tweet_volume + ' Tweets' : null}
								/
								>
							)
						})}
					</ul>
				</main> 
			</div>
		)
	}

})



export default TopicsList