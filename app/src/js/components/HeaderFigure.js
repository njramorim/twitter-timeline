import React, {Component, PropTypes} from 'react'


let last = 0
const initVal = -9999
let valorBase = initVal

export default class HeaderFigure extends Component {
	constructor(props){
		super(props)
	}


	handleScroll(e) {
		const img = document.querySelector('.heroImg img')
		
		let imgHei = img.offsetHeight
		let atual = window.pageYOffset

		if(window.scrollY <= 4){
			valorBase = initVal
			img.style.top = valorBase + 'px'
			img.className = 'volta'
		
		}else if(window.scrollY > 4 && window.scrollY < imgHei * 1.75) {

			img.className = ''

			if (atual > last){
			    valorBase = (valorBase++) + 1.2
			} else {
			    valorBase = (valorBase--) - 1.2
			}

			img.style.top = valorBase + 'px'

			last = atual
		}
			
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
	    window.removeEventListener('scroll', this.handleScroll);
	}

	render(){
		return(
			<figure className = "heroImg">
				<img src={this.props.bannerImg} />
			</figure>
		)
	}
}
