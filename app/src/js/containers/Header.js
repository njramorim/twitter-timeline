import React, {Component} from 'react'
import HeaderFigure from './../components/HeaderFigure'
import HeaderNav from './../components/HeaderNav'
import TopBar from './../components/TopBar' 


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
				<TopBar />
				<HeaderFigure 
					bannerImg={this.props.bannerImg} 
				/
				>
				<HeaderNav 
					logo={this.props.logo} 
					name ={this.props.name}
					screenName ={this.props.screenName}
		          	nTweets = {this.props.nTweets}
		          	nSeguindo = {this.props.nSeguindo}
		          	nSeguidores = {this.props.nSeguidores}
		          	nCurtidas = {this.props.nCurtidas}
				/
				>
			</header>
		)
	}
}
