import React, {Component} from 'react'

export default class TwitNav extends Component{
    
  componentWillMount () {
 
  }

  render () {   
    return (
      <nav className="twitNav">
            <ul>
                  <li className="active">
                        <a href="#">Tweets</a>
                  </li>
                  <li>
                        <a href="#">Tweets e respostas</a>
                  </li>
                  <li>
                        <a href="#">Mídia</a>
                  </li>
            </ul>
      </nav>
    )
  }    
}
