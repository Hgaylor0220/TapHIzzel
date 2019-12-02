import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    var navColor = {
        backgroundColor: '#B22222',
        color: 'white',
        fontWeight: 'bold'
    };
    var navTextStyle = {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Permanent Marker, cursive'
    };
    var iconStyles = {
        height: '50px',
        width: '50px',
        paddingTop: '10px'
    };

    return (
        <header className="navbar-fixed">
            <nav>

                <div style={navColor} className="nav-wrapper">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li>
                            <form>
                                <div className="input-field">
                                    <input id="search" type="search" required />
                                    <label className="label-icon" value="search"><i className="material-icons">search</i></label>
                                    <i className="material-icons">close</i>
                                </div>
                            </form>
                        </li>

                    </ul>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link style={navTextStyle} to='/'>Home</Link></li>
                        <li><Link style={navTextStyle} to='AddSandwich'>View Stock</Link></li>
                        <li><Link style={navTextStyle} to='ReviewSandwich'>Admin</Link></li>
                        <li><Link style={navTextStyle} to='ReviewSandwich'>Place Order</Link></li>

                    </ul>
                </div>
            </nav>
        </header>
    );
}



export default Header;