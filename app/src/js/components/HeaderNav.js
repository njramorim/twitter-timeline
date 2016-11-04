import React, {Component, PropTypes} from 'react'


export default class HeaderNav extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<nav>
				<div>
					<h1>
						<figure>
							<a href="#" >
								<img src={this.props.logo}/>
							</a>
						</figure>
						<figcaption>
							<a href="#">
								americanas.com
								<span>americanascom</span>
							</a>
							<a href="https://twitter.com/help/verified" target="_blank">
								<i>verified</i>
							</a>
						</figcaption>
					</h1>
					<ul className="list-infos">
						<li>
							<a className="active" href="#">
								<span>TWEETS</span>
								<p>{this.props.nTweets}</p>
							</a>
						</li>
						<li>
							<a href="#">
								<span>SEGUINDO</span>
								<p>{this.props.nSeguindo}</p>
							</a>
						</li>
						<li>
							<a href="#">
								<span>SEGUIDORES</span>
								<p>{this.props.nSeguidores}</p>
							</a>
						</li>
						<li>
							<a href="#">
								<span>CURTIDAS</span>
								<p>{this.props.nCurtidas}</p>
							</a>
						</li>
					</ul>
				</div>	
			</nav>
		)
	}
}