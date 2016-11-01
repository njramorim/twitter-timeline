import React, {Component, PropTypes} from 'react'

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
							<a href="#">americanas.com</a>
						</span> 
						<i className="verified">
							<a href="https://twitter.com/help/verified"></a>
						</i>	
						<span>
							<a href="#">americanascom</a>
						</span>
					</h1>
					<h2>
							A maior loja na palma da sua mão: <a href="https://t.co/J5pdYz5brU" target="blank">goo.gl/Ntg9wN</a>
					</h2>
					<p className="ico-local">Brasil</p>
					<p className="ico-link"><a href="http://t.co/PfJKJTZmj1" target="_blank">americanas.com</a></p>
					<p className="ico-date">Participa desde abril de 2009</p>
				</div>
			</div>
		)
	}
}
