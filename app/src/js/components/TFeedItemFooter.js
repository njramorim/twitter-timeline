import React, {Component} from 'react'

export default class TFeedItemFooter extends Component{
    
	componentWillMount () {

	}

	render () {   
		return (
			<footer  className="tweetActions">
				<ul>
					<li className="act-answer">
						<button type="button">
							<p>Responder</p>
							<i></i>
						</button>
					</li>
					<li  className="act-retweet">
						<button type="button">
							<p>Retweetar</p>
							<i></i>
							<span></span>
						</button>
					</li>
					<li  className="act-like">
						<button type="button">
							<p>Curtir</p>
							<i></i>
							<span></span>
						</button>
					</li>
					<li  className="act-plus">
						<button type="button">
							<p>Mais</p>
							<i></i>
							<span></span>
						</button>
						<ul>
							<li>
								<button type="button">
									Compartilhar por mensagem direta
								</button>
							</li>

							<li>
								<button type="button">
									Copiar link para o Tweet
								</button>
							</li>

							<li>
								<button type="button">
									Incorporar Tweet
								</button>
							</li>

							<li>
								<button type="button">
									Silenciar @americanascom
								</button>
							</li>

							<li>
								<button type="button">
									Bloquear @americanascom
								</button>
							</li>

							<li>
								<button type="button">
									Denunciar Tweet
								</button>
							</li>

							<li>
								<button type="button">
									Novo Moment
								</button>
							</li>
						</ul>
					</li>
				</ul>
			</footer>
		)
	}
}