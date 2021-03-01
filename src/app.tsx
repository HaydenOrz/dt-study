import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import '@/style/index.scss'
import routes from './router'

ReactDOM.render(
    <HashRouter>
        {renderRoutes(routes)}
    </HashRouter>,
    document.getElementById('app')
)
