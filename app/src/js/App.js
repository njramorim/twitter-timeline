import React, {Component, PropTypes} from 'react'
import Header from './containers/Header'
import Content from './containers/Content'

// import {twitterInfos} from './actions/twitterInfos'

const propTypes = {

}

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentUser: {}
    }
  }

  componentWillMount() {
    console.log('About to mount App')

  }

  componentDidMount() {
    // twitterInfos()
  }

  componentWillUnmount() {

  }

  renderChildren() {

  }

  render() {
    return (
      <div>
      	<Header />
        <Content />
      </div>
    )
  }

}

