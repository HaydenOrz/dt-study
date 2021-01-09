import React from 'react'
import ReactDOM from 'react-dom'

import '@/styles/reset.css'
import '@/styles/index.scss'

import Login from '@/views/login'

ReactDOM.render(
    <React.StrictMode>
        <Login/>
    </React.StrictMode>,
    document.getElementById('app')
)
