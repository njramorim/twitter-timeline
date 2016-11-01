import twit from 'twitter'

export function twitterInfos(){
  // const twitter = new twit({
  //   consumer_key: 'LaGQ6vuOy348ZyWIBsOuRte4m',
  //   consumer_secret: 'MLD51Gd4zTfBlOQ1WrSOeVSJnlaHFyrnEcGagAlIY35nuVo5hE',
  //   access_token_key: '793173274339446784-dlcUs0WrwSgG1Rk4I1e3vTipdMv4Q1j',
  //   access_token_secret: 'xGh94n5x78WZ38uTQ8qhQE8U5lhst88pNyD4ezscrsG40'

  // })

  // let count = 0

  // twitter.stream('filter', {track: 'love'}, (stream) => {
  //   stream.on('data', (data) => {
  //     console.log(data)
  //     stream.destroy()
  //   })
  // })

  const url = 'https://api.twitter.com/1.1/search/tweets.json?q=%23freebandnames&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4'

  const request = new Request(url, {
    method: 'GET', 
    headers: new Headers({
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Basic bWVjaTllbUI3MjA1Ymo0VzQ0eFFDQVRVNjowR0RKWWFUeDg1bkRwbm9pOHp3R2EwVDdNU1FJT1J0OVJkS3Y2aEFmRFNSb0QzUjRGUA=='
    })
     
  })


  fetch(request).then((response) => {
    console.log('response: ', response)
  })


}
