import React from 'react';
import Order from './Order';
import PropTypes from 'prop-types';
import backgroundImage from '../assets/images/background.jpg';  


function OrderList(props) {
    var orderStyling = {
        textAlign: 'center',
        fontFamily: 'Permanent Marker, cursive',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        color: '#8B0000',
        fontWeight: 'bold'
    };

    return (

        <div style={orderStyling}>
            <h1> Order Page</h1>
             {props.orderList.map((order) =>
                <Order name={order.name}
                    type={order.type}
                    brand={order.brand}
                    currentRouterPath={props.currentRouterPath}
                    key={order.id} />
            )}
        </div>
    );
}
OrderList.propTypes = {
    orderList: PropTypes.array,
    currentRouterPath: PropTypes.string
};

export default OrderList;