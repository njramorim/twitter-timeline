import gulp  from 'gulp'
import twit  from 'twitter'
import util  from 'util'

gulp.task('serv', (callback) => {
	const twitter = new twit({
		consumer_key: 'LaGQ6vuOy348ZyWIBsOuRte4m',
	    consumer_secret: 'MLD51Gd4zTfBlOQ1WrSOeVSJnlaHFyrnEcGagAlIY35nuVo5hE',
	    access_token_key: '793173274339446784-dlcUs0WrwSgG1Rk4I1e3vTipdMv4Q1j',
	    access_token_secret: 'xGh94n5x78WZ38uTQ8qhQE8U5lhst88pNyD4ezscrsG40'
	})

	let count = 0

	twitter.stream('statuses/filter', {track: 'americanas'}, (stream) => {
		stream.on('data', (data) => {
			console.log(util.inspect(data))
			stream.destroy()
			process.exit(0)
		})

		stream.on('error', (error) => {
		    throw error
		})
	})

})
