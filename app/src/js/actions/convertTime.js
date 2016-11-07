import moment from 'moment'
import {months} from './months'

export function convertTime(hrPostagem){
	let postagem = new Date(Date.parse(hrPostagem))
    let agora = new Date()

    let diff = Math.floor((agora - postagem) / 1000)
    if (diff <= 1) {return "agora mesmo"}
    if (diff < 20) {return diff + " segundos atrás"}
    if (diff < 40) {return "meio minuto"}
    if (diff < 60) {return "menos de um minuto"}
    if (diff <= 90) {return "um minuto"}
    if (diff <= 3540) {return Math.round(diff / 60) + " minutos atrás"}
    if (diff <= 5400) {return "1 horas atrás"}
    if (diff <= 86400) {return Math.round(diff / 3600) + " horas atrás"}
    if (diff > 86400) {
    	moment.updateLocale('pt', {
           months
        })
        let data = moment(hrPostagem)
        let dataDia = data.format('D')
        let dataMes = data.format('MMMM')
        let dataMesRedux = dataMes.substr(0, 3)
        let output =  dataDia + ' de ' +  dataMesRedux
        return output

    }

   // return postagem
}