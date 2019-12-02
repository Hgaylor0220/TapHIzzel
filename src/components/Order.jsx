import React from 'react';
import PropTypes from 'prop-types';

function Order(props) {
    const orderInformation =
        <div>
            <h3>{props.type} - {props.name}</h3>
            <h4>{props.brand}</h4>
            <hr />
        </div>;
    if (props.currentRouterPath === '/admin') {
        return (
            <div onClick={() => { alert('View the order for' + props.name); }}>
                {orderInformation}
            </div>
        );
    } else {
        return (
            <div>
                {orderInformation}
            </div>
        );
    }
}
Order.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    brand: PropTypes.string,
    currentRouterPath: PropTypes.string
};

export default Order;
