import React from 'react';
import './Header.scss';

const Header = () => {
    const headerItems = [
        {
            name: 'home',
        },
        {
            name: 'products',
        },
        {
            name: 'about',
        },
        {
            name: 'contact',
        }
    ]
    return <header>
        <ul>
            {
                headerItems.map((item, index) => {
                    return <li 
                        key={index}>{item.name}</li>
                })
            }
        </ul>
    </header>
}

export default Header;