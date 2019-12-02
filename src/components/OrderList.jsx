import React from 'react';
import Order from './Order';
import PropTypes from 'prop-types';
import backgroundImage from '../assets/images/background.jpg';



var masterOrderList = [
    {
        names:'Dead Guy, Season Bee, HardCore',
        type: 'IPA',
        brand: 'Rogue, Naturals Beer, Samstown'
    },

    {
        names: 'Pinapple, Ginger Apple Cider, Aces',
        type: 'Cider',
        brand: 'ACES Cider,Soultree'
    },

    {
        nname: 'Foothills Sexual Chocolate',
        type: 'Stout',
        brand: 'Foothills gang'
    },

    {
        names: 'loggEliot Ness , Yossmitus',
        type: 'IndianPaleAle',
        brand: 'Great Lakes Brewing Co, JonesPaulin Drank'
    },

    {
        name: 'Hoppyright Infringement',
        type: 'Porter',
        brand: 'NOLA Brewery'
    },

    {
        names: 'Coors Light',
        type: 'Craft',
        brand: 'Coors Light'
    }
];


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