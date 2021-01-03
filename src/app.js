import React from 'react'
import ReactDOM from 'react-dom'

import '@/style/reset.css'
import '@/style/index.css'

import Header from '@/component/header'

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <p>Hello World!!!</p>
    </React.StrictMode>,
    document.getElementById('app')
)
