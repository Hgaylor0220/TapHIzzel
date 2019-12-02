import React from 'react';
import PropTypes from 'prop-types';


function StockList(props) {
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

export default StockList;