import React     from 'react'
import ReactDOM  from 'react-dom'
import Init  from './Init'

// if ( process.env.NODE_ENV !== 'production' ) {
//   // Enable React devtools
//   window.React = React;
// }
const dev = false
if(!dev){
	console.log = function() {}
	console.warn = console.log
	console.error = console.log
}

ReactDOM.render(Init, document.getElementById('app'))