import { type } from 'os';
import * as React from 'react';
import { Component } from 'react';

const InitState=  {
    title: '',
    total: 0
}

type IState = typeof InitState

class Main extends Component<any,IState> { 
    state:IState = {
        title: 'hello world',
        total: 2,
    }
    incrementTotal = () => {
        const { total } = this.state
        this.setState({
            total:total+1
        })
    }
    render() {
        return (
            <>
                <p>{this.state.title}</p>
                <p>总数是:{this.state.total}</p>
                <button onClick={this.incrementTotal}>增加数量</button>
            </>
        )
    }
}
export default Main
