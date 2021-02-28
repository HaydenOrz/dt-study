import React, { useState } from 'react'
import { Menu } from 'antd'

const { Item } = Menu
interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    const [current, setCurrent] = useState('home')

    const handleClick = e => {
        setCurrent(e.key)
    }
    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
            <Item key='home'>主页</Item>
            <Item key='login'>登录</Item>
        </Menu>
    )
}

export default Header
