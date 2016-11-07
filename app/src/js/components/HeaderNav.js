import React, {Component} from 'react'


export default class HeaderNav extends Component {
	constructor(props){
		super(props)
		this.state = {
			stop: false
		}
	}

	handleScroll(el) {
	
	}

	componentDidMount(){
		
	}

	componentWillUnmount(){
	    
	}

	render(){
		return(
			<nav className="pageNav">
				<div>
					<h1>
						<figure>
							<a href="#" >
								<img className="logoImg" src={this.props.logo}/>
							</a>
						</figure>
						<figcaption>
							<a href="#">
								<img className="miniLogo" src={this.props.logo} />
							</a>
							<b>
								<a href="#">
									{this.props.name}
								</a>
							</b>
							
								<a href="https://twitter.com/help/verified" target="_blank">

									<i>
									</i>
								</a>

							<span>
								<a href="#">
									@{this.props.screenName}
								</a>
							</span>

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