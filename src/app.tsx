import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import '@/style/index.scss'
// import Login from '@/views/login'
// import Test from '@/views/testComponent'
import routes from './router'

// ReactDOM.render(
//     <HashRouter>
//         {routes}
//     </HashRouter>,
//     document.getElementById('app')
// )

ReactDOM.render(
    <HashRouter>
        {renderRoutes(routes)}
    </HashRouter>,
    document.getElementById('app')
)
