import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import store from '@/store'
import '@/style/index.scss'
import routes from './router'

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            {renderRoutes(routes)}
        </HashRouter>
    </Provider>
    ,
    document.getElementById('app')
)
