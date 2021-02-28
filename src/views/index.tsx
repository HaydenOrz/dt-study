import React, { Component } from 'react'

import Header from '@/views/layout/header'

interface IProps {
    children: React.ReactNode
}
interface IState {}

class Main extends Component<IProps, IState> {
    render() {
        return (
            <>
                <Header/>
                <div>
                    {this.props.children}
                </div>
            </>
        )
    }
}

export default Main
