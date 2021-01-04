import React, { Component, MouseEvent } from 'react'

interface IProps{
    text?: string,
    onClick?: (event: MouseEvent) => void
}

function Button (props: IProps) {
    const { text, onClick } = props
    return (
        <>
            <button onClick={onClick}>{text}</button>
        </>
    )
}
export default Button
