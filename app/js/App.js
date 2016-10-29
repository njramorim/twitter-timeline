import React from 'react';


const propTypes = {

};

class App extends React.Component {

  constructor(props) {
    super(props);

    this.onUserChange = this.onUserChange.bind(this);

    this.state = {
      currentUser: {}
    };
  }

  onUserChange(err, user) {
    if ( err ) {
      this.setState({ error: err });
    } else {
      this.setState({ currentUser: user || {}, error: null });
    }
  }

  componentWillMount() {
    console.log('About to mount App');
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
    );
  }

}

App.propTypes = propTypes;

export default App;