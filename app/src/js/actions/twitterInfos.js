import axios from 'axios'

export function twitterInfos(info, param, el){

    function avatar(logoString) {
        let ls = logoString
        console.log(ls)

        let lsSplit = ls.split('_normal')[0]
        let lsAvatar = lsSplit +  '_400x400.jpg'

        return lsAvatar
    }

    function fmtNumber(number, separatorPos, separator, positionEnd, textEnd) { 
        let string = number.toString()
        let strSep = string.slice(0, separatorPos)
        let strJoin = strSep + separator + string.slice(separatorPos, positionEnd)
        let output =  strJoin + ' ' + textEnd

        console.log(output)
        return output
    }


    axios.get('serv/'+info+'.php')
    .then(function (result){
    	//console.log(JSON.stringify(result.data))
    	//console.log(result.data[param])
    	const rd = result.data
        console.log( JSON.stringify(rd) )

    	el.setState({
    		screenName: rd['screen_name'],
    		banner: rd['profile_banner_url'],
            logo: avatar(rd['profile_image_url']),
            nTweets: fmtNumber(
                rd['statuses_count'], 
                2   ,
                ',' , 
                3   , 
                'mil'
            ),

            nSeguindo: fmtNumber(
                rd['friends_count'], 
                1   ,
                '.' , 
                4   , 
                ''
            ),

            nSeguidores: fmtNumber(
                rd['followers_count'],
                0   ,
                '' , 
                3   , 
                'mil'
            ),

            nCurtidas: rd['favourites_count'],
    	})
       

    })

}
