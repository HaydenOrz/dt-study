import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import * as router from 'react-router'
import '@/style/index.scss'

// import Login from '@/views/login'
// import Test from '@/views/testComponent'
import initRoutes from './router'

ReactDOM.render(
    <React.StrictMode>
        <HashRouter routes={initRoutes()}>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('app')
)

console.log(router)
