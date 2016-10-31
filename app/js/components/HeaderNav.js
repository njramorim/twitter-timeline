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
							<a href="" >
								<img src="https://pbs.twimg.com/profile_images/777959576482287617/taEJPem9_400x400.jpg" />
							</a>
						</figure>
						<figcaption>
							<a href="">
								americanas.com
								<span>americanascom</span>
							</a>
							<a href="">
								<i>verified</i>
							</a>
						</figcaption>
					</h1>
					<ul className="list-infos">
						<li>
							<a className="active" href="">
								<span>TWEETS</span>
								<p>22,8 mil</p>
							</a>
						</li>
						<li>
							<a href="">
								<span>SEGUINDO</span>
								<p>1.321</p>
							</a>
						</li>
						<li>
							<a href="">
								<span>SEGUIDORES</span>
								<p>238 mil</p>
							</a>
						</li>
						<li>
							<a href="">
								<span>CURTIDAS</span>
								<p>24</p>
							</a>
						</li>
					</ul>
				</div>	
			</nav>
		)
	}
}