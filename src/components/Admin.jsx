import React from 'react';
import PropTypes from 'prop-types';
import OrderList from './OrderList';

function Admin(props) {
    return (
        <div>
            <h2>Admin</h2>
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