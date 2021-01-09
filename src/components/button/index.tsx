import React from 'react'

interface IProps{
    text?: string,
    onClick?: (event: React.MouseEvent) => void
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
