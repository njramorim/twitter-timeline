import React, {Component} from 'react'
import ContentSummary from './../components/ContentSummary'
import TwitNav from './../components/TwitNav'
import TwitFeed from './../components/TwitFeed'
import FollowsList from './../components/FollowsList'
import TopicsList from './../components/TopicsList'
import {twitterInfos} from './../actions/twitterInfos'

let tweets = []

export default class Content extends Component {
	constructor(props){
		super(props)
		this.state = {
			userName: ''
		}
	}


	componentWillMount() {
    	console.log('getting tweets')
	}

	render(){
		return(
			<div className="contentWrapper">
				<section className="contentOne">
					<ContentSummary 
						logoImg = {this.props.logo}
      					name = {this.props.name}
			            screenName = {this.props.screenName}
			            location = {this.props.location}
			            description = {this.props.description}

			            timezone = {this.props.timezone}
			            verified = {this.props.verified}
			            utcOffset = {this.props.utcOffset}
			            created = {this.props.created}

			            url = {this.props.url}
					/>
				</section>
				<section className="contentTwo">
					<TwitNav />
					<TwitFeed />
				</section>
				<section className="contentThree">
					<FollowsList />
					<TopicsList />
				</section>
			</div>
		)
	}
}
