import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {App} from './App'
import {register} from './serviceWorker'

console.debug('STARTING WEATHER APP')

ReactDOM.render(
    <App/>,
    document.getElementById('root') as HTMLElement
)

register()
