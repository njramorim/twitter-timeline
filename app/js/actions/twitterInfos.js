import twit from 'twitter'

export function twitterInfos(){
  const twitter = new twit({
    consumer_key: 'LaGQ6vuOy348ZyWIBsOuRte4m',
    consumer_secret: 'MLD51Gd4zTfBlOQ1WrSOeVSJnlaHFyrnEcGagAlIY35nuVo5hE',
    access_token_key: '793173274339446784-dlcUs0WrwSgG1Rk4I1e3vTipdMv4Q1j',
    access_token_secret: 'xGh94n5x78WZ38uTQ8qhQE8U5lhst88pNyD4ezscrsG40'

  })

  let count = 0

  twitter.stream('filter', {track: 'love'}, (stream) => {
    stream.on('data', (data) => {
      console.log(data)
      stream.destroy()
    })
  })


}
