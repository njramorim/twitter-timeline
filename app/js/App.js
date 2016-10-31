import React from 'react'
import Header from './containers/Header'
import Content from './containers/Content'



const propTypes = {

}

class App extends React.Component {

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

App.propTypes = propTypes

export default App