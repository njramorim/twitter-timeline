import axios from 'axios'
import moment from 'moment'

const sname = 'americanascom'

export function getTweets(el, type, val, nTweet){
    function firstTweets(el, result) {
        const rThis = el

        let quantos = result.data.length
        rThis.setState({
          tweets: result.data,
          quant: quantos,
          lastItem: result.data[quantos - 1].id
        });
    }

    function moreTweets(el, result){
        const rThis = el

        let jaTem = rThis.state.tweets
        let quantos = result.data.length
        let novos = result.data
        let agoraTem = jaTem.concat(novos)

        rThis.setState({
          tweets: agoraTem,
          quant: quantos,
          firstItem: novos[0].id,
          lastItem: result.data[quantos - 1].id
        }); 

        console.log(el.state.tweets)

    }

    if (type === 'loadMore'){
        return(
            axios.get('serv/get_twitter.php', {
                params: {
                    screen_name: sname,
                    count: nTweet,
                    max_id: val
                }
                
            }).then(function (result){
                console.log(result.data)
                moreTweets(el, result)
                return result.data
            })
        )

    }

    return(
        axios.get('serv/get_twitter.php', {
            params: {
                screen_name: sname,
                count: nTweet
            }
            
        }).then(function (result){
            // console.log(result.data)
            firstTweets(el, result)
            return result.data
        })
    )

}
