import * as React from 'react'
import * as ReactDOM from 'react-dom'

import '@/styles/reset.css'
import '@/styles/index.scss'

import Header from '@/components/header'
import Main from '@/components/main'

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Main />
    </React.StrictMode>,
    document.getElementById('app')
)
