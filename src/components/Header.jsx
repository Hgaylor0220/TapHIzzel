import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    var navbarStyle = {
        backgroundColor: '#5C7658',
        fontFamily: 'Permanent Marker, cursive',
        textShadow: '2px 2px 0 #B22222',

    };
    var linkStyle = {
        color: 'black'
    };
    return (
        <div className='navbar' style={navbarStyle}>
            <Link to='/' style={linkStyle}>Home</Link>
            <h1>Tap Hizzel</h1>
            <Link to='/ViewStock' style={linkStyle}>View Current Stock</Link>
            <Link to='/neworder' style={linkStyle}>Create a Order</Link>
        </div>
    );
}

export default Header; 