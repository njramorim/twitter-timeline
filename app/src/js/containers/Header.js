import React, {Component, PropTypes} from 'react'
import HeaderFigure from './../components/HeaderFigure'
import HeaderNav from './../components/HeaderNav'


export default class Header extends Component {
	constructor(props){
		super(props)
	}

	componentWillMount(){
	}

	componentDidMount() {

	}

	render(){
		return(
			<header className="topo">
				<HeaderFigure bannerImg={this.props.bannerImg}/>
				<HeaderNav 
					logo={this.props.logo} 
		          	nTweets = {this.props.nTweets}
		          	nSeguindo = {this.props.nSeguindo}
		          	nSeguidores = {this.props.nSeguidores}
		          	nCurtidas = {this.props.nCurtidas}
				/>
			</header>
		)
	}
}
