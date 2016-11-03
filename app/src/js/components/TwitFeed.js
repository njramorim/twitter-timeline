import React, {Component, PropTypes} from 'react'
import axios from 'axios'

export default class TwitFeed extends Component{
    
  // get data ready before rendering
  componentWillMount () {
    var t = this;

    // establish ajax call
    axios.get('tweets.php', {
      params: {
        screen_name: this.props.screen_name,
        count: this.props.count
      }
    })
    .then(function (result) {
    	console.log(result.data)
    })
  }

  render () {   
    return (
      <div>Tweet</div>
    )
  }    
}
