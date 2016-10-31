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
					<ul>
						<li>item 1</li>
						<li>item 2</li>
						<li>item 3</li>
						<button>Settings</button>
						<button>Follow</button>
					</ul>
				</div>	
			</nav>
		)
	}
}