import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import '@/style/index.scss'

// import Login from '@/views/login'
// import Test from '@/views/testComponent'
import routes from './router'

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            {routes}
        </HashRouter>
    </React.StrictMode>,
    document.getElementById('app')
)
