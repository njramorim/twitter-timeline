import React     from 'react'
import ReactDOM  from 'react-dom'
import Init  from './Init'


const dev = false
if(!dev){
	console.log = function() {}
	console.warn = console.log
	console.error = console.log
}

ReactDOM.render(Init, document.getElementById('app'))