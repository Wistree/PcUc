import React from 'react';
import './header.style.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className = 'header'>
        <Link className = 'logo-container' to = '/'>
            <Logo className = 'logo'/>
        </Link>
        <div className = 'options'>
            <Link className = 'option' to = '/about'> PCUc </Link>
            <Link className = 'option' to = '/contact'> LIÊN HỆ </Link>        
        </div>
    </div>
);

export default Header;