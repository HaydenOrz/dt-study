import React from 'react'
import ReactDOM from 'react-dom'

import '@/style/reset.css'
import '@/style/index.scss'

import Header from '@/component/header'
import Main from '@/component/Main'

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Main />
    </React.StrictMode>,
    document.getElementById('app')
)
