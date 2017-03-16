import React, {Component} from 'react'
import Header from './containers/Header'
import Content from './containers/Content'

import {twitterInfos} from './actions/twitterInfos'
import axios from 'axios'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount() {
    console.log('About to mount App')
  }

  componentDidMount() {
    twitterInfos(this) 
  }

  render() {
    return (
      <div>
      	<Header 
          bannerImg = {this.state.banner}
          logo = {this.state.logo}
          name = {this.state.name}
          screenName = {this.state.screenName}
          nTweets = {this.state.nTweets}
          nSeguindo = {this.state.nSeguindo}
          nSeguidores = {this.state.nSeguidores}
          nCurtidas = {this.state.nCurtidas}
        />
        <Content 
          logoImg = {this.state.logo}
          name = {this.state.name}
          screenName = {this.state.screenName}

          location = {this.state.location}
          description = {this.state.description}
          timezone = {this.state.timezone}
          verified = {this.state.verified}
          utcOffset = {this.state.utcOffset}
          created = {this.state.created}

          url = {this.state.url}
        />
      </div>
    )
  }

}

