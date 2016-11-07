import React     from 'react'
import ReactDOM  from 'react-dom'
import Init  from './Init'

// if ( process.env.NODE_ENV !== 'production' ) {
//   // Enable React devtools
//   window.React = React;
// }

console.log(process.env.NODE_ENV) 

ReactDOM.render(Init, document.getElementById('app'))