import React from 'react'

interface IInput{
    className?: string,
    placeholder?: string,
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void,
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
    onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}
function Input (props: IInput) {
    return (
        <>
            <input/>
        </>
    )
}

export default Input
