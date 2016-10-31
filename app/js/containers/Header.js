import React, {Component, PropTypes} from 'react'
import HeaderFigure from './../components/HeaderFigure'
import HeaderNav from './../components/HeaderNav'


export default class Header extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<header className="topo">
				<HeaderFigure />
				<HeaderNav />
			</header>
		)
	}
}
