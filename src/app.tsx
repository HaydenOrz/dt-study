import React from 'react'
import ReactDOM from 'react-dom'

import '@/style/index.scss'

import Login from '@/views/login'
import Test from '@/views/testComponent'
ReactDOM.render(
    <React.StrictMode>
        <Test/>
    </React.StrictMode>,
    document.getElementById('app')
)
