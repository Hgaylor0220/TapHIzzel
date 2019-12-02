import React from 'react';
import PropTypes from 'prop-types';
import OrderList from './OrderList';
import backgroundImage from '../assets/images/background.jpg';

function Admin(props) {
    var homeStyling = {
        textAlign: 'center',
        fontFamily: 'Permanent Marker, cursive',
        backgroundImage: `url(${backgroundImage})`,
        flex: '1',
        color: '#B22222',
        textShadow: '3px 3px 0 #000',
        fontWeight: 'bold'
    };
    return (
        <div style={homeStyling}>
            <h2>Current Orders, Admin ONLY</h2>
            <OrderList
                orderList={props.orderList}
                currentRouterPath={props.currentRouterPath} />
        </div>
    );
}

Admin.propTypes = {
    orderList: PropTypes.array,
    currentRouterPath: PropTypes.string.isRequired
};

export default Admin;