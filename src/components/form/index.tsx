import * as React from 'react'
import { useContext } from 'react'

import { classNames, prefixClaName, getBEMModifier } from 'utils/className'
import './index.scss'

const preFormClaName = prefixClaName('form')
const initState = {
    data: {},
}
type IFormState = typeof initState
class Form extends React.Component<React.FormHTMLAttributes<HTMLFormElement>, IFormState> {
    state: IFormState = initState

    UNSAFE_componentWillReceiveProps(pre, cur) {
        console.log(pre, cur)
    }

    render() {
        const { className, children, ...restProps } = this.props
        console.log(children)
        return (
            <>
                <form {...restProps}>
                    {children}
                </form>
            </>
        )
    }
}

export default Form
