import React from 'react';
import PropTypes from 'prop-types';

function Order(props) {
    return (
        <div>
            <h3>{props.type} - {props.name}</h3>
            <p><em>{props.brand}</em></p>
            <hr />
        </div>
    );
}

Order.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    brand: PropTypes.string
};

export default Order;
