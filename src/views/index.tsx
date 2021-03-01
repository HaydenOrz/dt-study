import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'

import Header from '@/views/layout/header'

interface IProps {
    children?: React.ReactNode,
    route?: any
}
interface IState {}

class Main extends Component<IProps, IState> {
    render() {
        console.log("++++++render Main+++++")
        return (
            <>
                <Header/>
                {renderRoutes(this.props.route.routes)}
            </>
        )
    }
}

export default Main
