import React, {Component} from 'react'
import TopicsListItem from './TopicsListItem'

export default class TopicsList extends Component {
	constructor(props){
		super(props)
	}


	componentDidMount() {

	}

	render() {
		return(
			<div className="topics side-box">
				<header>
					<h3>Assuntos do momento</h3>
					<span> · </span>
					<a href="#">Alterar</a>		
				</header>
				<main>
					<ul>
						<TopicsListItem />
						<TopicsListItem />
						<TopicsListItem />
						<TopicsListItem />
						<TopicsListItem />
						<TopicsListItem />
					</ul>
				</main> 
			</div>
		)
	}

}