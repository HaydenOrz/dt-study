import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
            <Item key='home'><Link to='/home'>主页</Link> </Item>
            <Item key='login'><Link to='/login'>登录</Link></Item>
        </Menu>
    )
}

export default Header
