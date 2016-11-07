import React, {Component} from 'react'
import TFeedItem from './TFeedItem'
import {getTweets} from './../actions/getTweets'
import {convertTime} from './../actions/convertTime' 

let vezes = 0
let locked = false
const nTweet = 100

const TwitFeed = React.createClass({
   
  getInitialState() {
    return {
      tweets: []
    }
  },

  componentWillMount() { 
    window.scrollTo(0,0) 
  },

  loadMore() {
    vezes++
    getTweets(this, 'loadMore', this.state.lastItem, nTweet)
    console.log(vezes)
  },

  
  componentDidMount() {
    getTweets(this, 'loadFirst', '', nTweet)
    let rThis = this
    window.onscroll = function (e) {
      if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        rThis.loadMore()
      }
    }
  },

  componentDidUpdate() { 

  },
  
  render() {
    return (
      <div className="twitFeed">
        <ol className="feedList">
          {this.state.tweets.map((tweet , i) => {
            return (
              <TFeedItem 
                key={tweet.id}
                userName = {tweet.user.name}
                userScreenName = {tweet.user.screen_name}
                userLink = {'https://twitter.com/'+ tweet.user.screen_name}
                userAvatar = {tweet.user.profile_image_url}
                hora = {convertTime(tweet.created_at)}

                text = {tweet.text}
                retweets = {tweet.favorite_count}
                likes = {tweet.retweet_count}

              />
            )
          })}
        </ol>
        <span>Carregando</span>
      </div>
    )
  }
})

export default TwitFeed

       // if(tweet.in_reply_to_screen_name != null){
            //   return null
            // }