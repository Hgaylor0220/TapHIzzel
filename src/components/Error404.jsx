import React from 'react';
import { Link } from 'react-router-dom';
import JackieChan from '../assets/images/JackieChan.jpg';
import PropTypes from 'prop-types';

function Error404(props) {
    return (
        <div className="container center">
            <img src={JackieChan}></img>
            {/* <h2>WHOOPS {props.location.pathname} SOO SORRY THIS PAGE NO EXIST!</h2> */}
            <h3>Back to <Link to='/'>HOME</Link></h3>
        </div>
    );
}

// Error404.propTypes = {
//     location: PropTypes.object
// };

export default Error404;