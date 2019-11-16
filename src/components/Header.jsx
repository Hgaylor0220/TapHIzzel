import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    var navbarStyle = {
        backgroundColor: '#FFF8DC',
        fontFamily: 'Permanent Marker, cursive',

    };
    var linkStyle = {
        color: 'black'
    };
    return (
        <div className='navbar' style={navbarStyle}>
            <Link to='/' style={linkStyle}>Home</Link>
            <h1>Tap Hizzel</h1>
            <Link to='/ViewStock' style={linkStyle}>View Inventory</Link> 
            <Link to='/Order' style={linkStyle}>Place an Order</Link>
        </div>
    );
}

export default Header;