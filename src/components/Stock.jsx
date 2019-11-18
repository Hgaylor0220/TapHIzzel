import React from 'react';
import PropTypes from 'prop-types';
import ViewStock from './ViewStock';

function Stock(props){
    return (
        <div
            className="card" >
            <h3>{props.name}</h3>
            <br />
            <p>{props.brand}</p>
            <p>{props.price}</p>
            <p>{props.alcoholContent}</p>
        </div>
    );
}

    Stock.propTypes = {
        name: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        price: PropTypes.string,
        alcoholContent: PropTypes.string
        };
 
export default Stock;