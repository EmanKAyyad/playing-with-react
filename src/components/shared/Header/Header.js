import React from 'react';
import './Header.scss';
import { NavLink } from "react-router-dom";

const Header = () => {
    const headerItems = [
        {
            name: 'home',
            to: '/'
        },
        {
            name: 'new post',
            to: 'new post'
        }
    ]
    return <header>
        <ul>
            {
                headerItems.map((item, index) => {
                    return <li 
                        key={index}>
                            <NavLink exact activeClassName="active-nav" to={item.to}>{item.name}</NavLink></li>
                })
            }
        </ul>
    </header>
}

export default Header;