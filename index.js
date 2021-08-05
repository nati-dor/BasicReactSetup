import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

// import HelloEl from './HelloEl'


const helloEl = <div className="hello">Hello World!!</div>


ReactDOM.render(helloEl, document.querySelector("#root"))