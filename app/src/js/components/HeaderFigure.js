import React, {Component, PropTypes} from 'react'


export default class HeaderFigure extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<figure>
				<img src="https://pbs.twimg.com/profile_banners/35019751/1474315029/1500x500" />
			</figure>
		)
	}
}
