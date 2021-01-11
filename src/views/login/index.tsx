import React from 'react'

import Input from 'components/input'
import { prefixClaName, getBEMElement } from 'utils/className'

// const logFormClaName = prefixClaName('loginForm')
class Login extends React.Component {
    handleClick= () => {
        fetch('api/v1/user/user/login', {
            'method': 'POST',
            'headers': { 'content-type': 'application/json;charset=UTF-8' },
            'body': JSON.stringify({
                'username': 'lisi',
                'password': '123456'
            })
        })
    }

    render () {
        return (
            <>
                <Input />
            </>
        )
    }
}
export default Login
