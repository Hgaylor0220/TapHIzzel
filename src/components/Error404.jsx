import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/background.jpg';

function Error404(props) {
    var homeStyling = {
        textAlign: 'center',
        fontFamily: 'Permanent Marker, cursive',
        backgroundImage: `url(${backgroundImage})`,
        flex:'1',
        color: '#B22222',
        textShadow: '3px 3px 0 #000',
        fontWeight: 'bold'
    };
    return (    
        <div style={homeStyling}>
            <h2>WHOOPS!!! The page {props.location.pathname} does not exist!</h2>
            <h3>Return <Link to="/">home page</Link> instead?</h3>
        </div>
    );
}

Error404.propTypes = {
    location: PropTypes.object
};

export default Error404;