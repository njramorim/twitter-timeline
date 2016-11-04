import React, {Component, PropTypes} from 'react'


export default class HeaderFigure extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<figure>
				<img src={this.props.bannerImg} />
			</figure>
		)
	}
}
