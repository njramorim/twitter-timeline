import React, {Component} from 'react'

export default class TFeedItemHeader extends Component{
    
	componentWillMount () {

	}

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



// <header>
// 				<figure>
// 					<a href="#">
// 						<img src="https://pbs.twimg.com/profile_images/777959576482287617/taEJPem9_bigger.jpg"/>
// 						<figcaption>
// 							<b>americanas.com</b>
// 							<span>
// 								@americanascom
// 							</span>	
// 						</figcaption>
// 					</a>
// 				</figure>
// 				<p className="time">
// 					1 h
// 				</p>
// 			</header>