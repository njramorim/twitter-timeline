import React, {Component} from 'react'
import TFeedItemHeader from './TFeedItemHeader'
import TFeedItemBody from './TFeedItemBody'
import TFeedItemFooter from './TFeedItemFooter'

export default class TFeedItem extends Component{
	render () {   
	    return (
			<li>
				<article>
					<TFeedItemHeader 
						userName = {this.props.userName}
						userScreenName = {this.props.userScreenName}
						userLink = {this.props.userLink}
						userAvatar = {this.props.userAvatar}
						hora = {this.props.hora}
					/>
					<TFeedItemBody 
						text={this.props.text}
					/>
					<TFeedItemFooter 
						retweets = {this.props.retweets}
						likes = {this.props.likes}
					/>
				</article>
			</li>
	    )
	}
}

