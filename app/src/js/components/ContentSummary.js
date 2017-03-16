import React, {Component} from 'react'

export default class ContentSummary extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="summary">
				<div className="infos">
					<h1>
						<span>
							<a href="#">{this.props.name}</a>
						</span> 
						<a href="https://twitter.com/help/verified">
							<i className={'verified-'+this.props.verified}>
							</i>	
						</a>
						<span>
							<a href="#">{this.props.screenName}</a>
						</span>
					</h1>
					<h2 dangerouslySetInnerHTML={{ __html: this.props.description}}>
					</h2>
					<p className="ico-local">{this.props.location}</p>
					<p className="ico-link"><a href={this.props.url} target="_blank">{this.props.name}</a></p>
					<p className="ico-date">
						{this.props.created}
					</p>
				</div>

				<button className="tweetTo" type="button">
					<span>Tweetar para</span>
				</button>
			</div>
		)
	}
}

