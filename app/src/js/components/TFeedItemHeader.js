import React, {Component} from 'react'

export default class TFeedItemHeader extends Component{
	render () {   
		return (
			<header>
				<figure>
					<a href={this.props.userLink}>
						<img src={this.props.userAvatar}/>
						<figcaption>
							<b>{this.props.userName}</b>
							<span>
								@{this.props.userScreenName}
							</span>	
						</figcaption>
					</a>
				</figure>
				<p className="time">
					{this.props.hora}
				</p>
			</header>
		)
	}
}

