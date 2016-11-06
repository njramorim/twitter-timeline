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

  loadMore() {
    const rThis = this
      axios.get('serv/tweets.php', {
        params: {
          screen_name: 'americanascom',
          count: 200,
          exclude_replies: true,
          max_id: 791685937474465792
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

  getInfos(id) {
    const rThis = this
      axios.get('serv/initweet.php', {
        params: {
          screen_name: 'americanascom',
          count: 200
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
  
  componentDidMount() {
    //this.serverRequest = this.getInfos()
  },
  
  componentWillUpdate() {
      // let newTweets = result.data
      // let tweets = rThis.state.tweets.slice()
      // tweets.push(newTweets)

      // rThis.setState({ 
      //   tweets: rThis.state.tweets.concat([newTweets]),
      // })
      // let quantos = result.data.length
      // rThis.setState({ 
      //   quant: tweets.length,
      //   lastItem: result.data[quantos - 1].id
      // })
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
            if(tweet.in_reply_to_screen_name != null){
              return null
            }
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

