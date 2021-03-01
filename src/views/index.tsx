import React, { Component } from 'react'

import Header from '@/views/layout/header'

interface IProps {
    children?: React.ReactNode
}
interface IState {}

class Main extends Component<IProps, IState> {
    render() {
        console.log(this.props.children)
        console.log("++++++props+++++")
        return (
            <>
                <Header/>
                {this.props.children}
            </>
        )
    }
}

export default Main
