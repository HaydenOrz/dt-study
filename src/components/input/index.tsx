import * as React from 'react'
import { useState } from 'react'

import { classNames, prefixClaName, getBEMModifier } from 'utils/className'
import './index.scss'

const preInputClaName = prefixClaName('input')
const initState = {
    isLegal: true
}
interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label?: string,
    validator?: (value: any) => boolean,
    message?: string
}
type IInputState = typeof initState

class Input extends React.Component<IInputProps, IInputState> {
    state:IInputState = {
        ...initState
    }

    onValueChange = e => {
        const { validator, onChange } = this.props
        this.setState({
            isLegal: validator(e.target.value)
        })
        onChange(e)
    }

    render() {
        const { className, label, message, ...restProps } = this.props
        return (
            <>
                <label>{label}
                    <input
                        className={classNames(preInputClaName, className)}
                        onChange = {this.onValueChange}
                        {...restProps}
                    />
                </label>
                <p>{message}</p>
            </>
        )
    }
}

export default Input
