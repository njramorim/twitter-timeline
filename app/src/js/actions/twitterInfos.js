import axios from 'axios'
import moment from 'moment'

export function twitterInfos(info, param, el){

    function avatar(logoString) {
        let ls = logoString
        // console.log(ls)

        let lsSplit = ls.split('_normal')[0]
        let lsAvatar = lsSplit +  '_400x400.jpg'

        return lsAvatar
    }

    function fmtNumber(number, separatorPos, separator, positionEnd, textEnd) { 
        let string = number.toString()
        let strSep = string.slice(0, separatorPos)
        let strJoin = strSep + separator + string.slice(separatorPos, positionEnd)
        let output =  strJoin + ' ' + textEnd

        // console.log(output)
        return output
    }

    function fmtDate(string) {
        moment.updateLocale('pt', {
            months : [
                "janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho",
                "agosto", "setembro", "outubro", "novembro", "dezembro"
            ]
        })
        let data = moment(string)
        let dataMes = data.format('MMMM')
        let dataAno = data.format('YYYY')
        let output = 'Participa desde ' +  dataMes + ' de ' + dataAno

        // console.log(output)
        return output
    }

    function findLink(string, expandUrl) {
        let partes = string.split(' ')
        let link = 'http'
        let inteiro = ''
        let expandFim = expandUrl['description']['urls'][0]['display_url']

            partes.forEach((parte) => {
                parte.indexOf(link) > -1 ?  parte = '<a href="'+ parte +' ">' + expandFim + '</a>' : null

                parte = parte + ' '
                inteiro = inteiro + parte
            }) 

        return inteiro
    }


    axios.get('serv/'+info+'.php')
    .then(function (result){
        
        const rd = result.data
        console.log(rd)
    	//console.log(JSON.stringify(result.data))
    	//console.log(result.data[param])
        // console.log(info+': ')
        // console.log(result)
        // console.log( JSON.stringify(rd) )

        if (info === 'account'){ 
        	el.setState({
                id: rd['id'],
                name: rd['name'],
        		screenName: rd['screen_name'],

        		banner: rd['profile_banner_url'],
                logo: avatar(rd['profile_image_url']),

                location:  rd['location'],
                description: findLink(
                    rd['description'], 
                    rd['entities']
                ),

                timezone: rd['time_zone'],
                verified: rd['verified'],
                utcOffset: rd['utc_offset'],
                created: fmtDate(rd['created_at']),


                url: rd['url'],

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

            return rd
        
        }

    })

}
