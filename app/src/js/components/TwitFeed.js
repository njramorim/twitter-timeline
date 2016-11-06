import React, {Component} from 'react'
import TFeedItem from './TFeedItem'
import {twitterInfos} from './../actions/twitterInfos'
import axios from 'axios'


const TwitFeed = React.createClass({
   
  getInitialState() {
    return {
      tweets: []
    }
  },


  getTweets(id) {
    const rThis = this
      axios.get('serv/initweet.php', {
        params: {
          screen_name: 'americanascom',
          count: 10
        }

      }).then((result) =>{   
        console.log('tweets: ', result.data) 

        let quantos = result.data.length
        rThis.setState({
          tweets: result.data,
          quant: quantos,
          lastItem: result.data[quantos - 1].id
        });
        console.log('first: ', result.data[0].id)
        console.log('last: ', result.data[quantos - 1].id)
      })
  },


  loadMore() {
    const rThis = this
      axios.get('serv/tweets.php', {
        params: {
          screen_name: 'americanascom',
          count: 10,
          max_id: rThis.state.lastItem
        }

      }).then((result) =>{   
        let jaTem = rThis.state.tweets
        let quantos = result.data.length
        let novos = result.data
        let agoraTem = jaTem.concat(novos)
        
        console.log('jaTinha: ', rThis.state.tweets )
        rThis.setState({
          tweets: agoraTem,
          quant: quantos,
          lastItem: result.data[quantos - 1].id
        });
        console.log('second first: ', result.data[0].id)
        console.log('second last: ', result.data[quantos - 1].id)
        console.log('agoraTem: ', rThis.state.tweets )
      })
  },
  
  componentDidMount() {
    this.serverRequest = this.getTweets()
  },
  
  componentWillUpdate() {

  },

  componentWillUnmount() {
    this.serverRequest.abort();
  },
  
  render() {
    return (
      <div className="twitFeed">
            <button onClick={this.loadMore}> botones</button>
        <ol className="feedList">
          {this.state.tweets.map((tweet , i) => {
     
            return (
              <TFeedItem 
                key={i+'-'+tweet.id}
                userName = {tweet.user.name}
                userScreenName = {tweet.user.screen_name}
                userLink = {'https://twitter.com/'+ tweet.user.screen_name}
                userAvatar = {tweet.user.profile_image_url}
                hora = {tweet.created_at}

                text = {tweet.text}
              />
            )
          })}
        </ol>
      </div>
    )
  }
})

export default TwitFeed

       // if(tweet.in_reply_to_screen_name != null){
            //   return null
            // }