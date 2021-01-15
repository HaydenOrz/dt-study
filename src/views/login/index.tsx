import React from 'react'
import { prefixClaName, getBEMElement } from 'utils/className'
import API from '@/api'
import { checkLoginData } from '@/utils'
import './index.scss'

const logFormClaName = prefixClaName('loginForm')
const formTitleClaName = getBEMElement(logFormClaName, 'title')
const usernameInputClaName = getBEMElement(logFormClaName, 'username')
const passwordInputClaName = getBEMElement(logFormClaName, 'password')
const errorMsgClaName = getBEMElement(logFormClaName, 'errorMsg')
const loginBtnClaName = getBEMElement(logFormClaName, 'loginBtn')
const initState = {
    formData: {},
    allowLogin: true,
    errorMsg: ''
}
type IState = typeof initState
class Login extends React.Component<any, IState> {
    state:IState = initState

    login = async() => {
        const { formData } = this.state
        const res = await API.login(formData)
        if (res?.code === 0) {
            console.log('sads')
            this.setState({
                allowLogin: false,
                errorMsg: res.message
            })
        }
    }

    handleClick= e => {
        e.preventDefault()
        const { formData } = this.state
        const { allowLogin, errorMsg } = checkLoginData(formData)
        this.setState({
            allowLogin: allowLogin,
            errorMsg: errorMsg
        })
        if (!allowLogin) return
        this.login()
    }

    handleFormChange= e => {
        const { name, value } = e.target
        const { formData } = this.state
        const newFormData = {
            ...formData,
            [name]: value
        }
        this.setState({
            formData: newFormData,
            allowLogin: true
        })
    }

    render() {
        const { allowLogin, errorMsg } = this.state
        return (
            <>
                <form
                    className = {logFormClaName}
                    onChange={this.handleFormChange} 
                >
                    <p className={formTitleClaName}>账号密码登录</p>
                    <input
                        className={usernameInputClaName}
                        type="text"
                        name="username"
                        placeholder='请输入账号'
                    />
                    <input
                        className={passwordInputClaName}
                        type="password"
                        name="password"
                        placeholder='请输入密码'
                    />
                    <p className={errorMsgClaName}>{allowLogin ? '' : errorMsg}</p>
                    <input
                        className={loginBtnClaName}
                        type="submit"
                        value="登录"
                        onClick={this.handleClick}
                    />
                </form>
            </>
        )
    }
}

export default Login
