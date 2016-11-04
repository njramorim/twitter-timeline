import React, {Component, PropTypes} from 'react'
import Header from './containers/Header'
import Content from './containers/Content'

import {twitterInfos} from './actions/twitterInfos'

const propTypes = {

}

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      screenName: '',
      banner: '',
      logo: '',
      nTweets: '',
      nSeguindo: '',
      nSeguidores: '',
      nCurtidas: '',
    }
  }

  componentWillMount() {
    console.log('About to mount App')
    twitterInfos('account', '', this)

  }

  componentDidMount() {
  
  }

  componentWillUnmount() {

  }


  render() {
    return (
      <div>
      	<Header 
          bannerImg = {this.state.banner}
          logo = {this.state.logo}
          nTweets = {this.state.nTweets}
          nSeguindo = {this.state.nSeguindo}
          nSeguidores = {this.state.nSeguidores}
          nCurtidas = {this.state.nCurtidas}
        />
        <Content logoImg = {this.state.logo}/>
      </div>
    )
  }

}

