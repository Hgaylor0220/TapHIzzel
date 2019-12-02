import React from 'react';
import Order from './Order';
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


function OrderList() {
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
            <form >
                <label>New Order </label>
                <select>
                    <option value="IPA">IPA</option>
                    <option value="logger">Logger</option>
                    <option value="cider">Cider</option>
                    <option value="ale">Ale</option>
                    <option value="stout">Stout</option>
                    <option value="indianPaleAle">IndianPaleAle</option>
                    <option value="porter">Porter</option>
                    <option value="craft">Craft</option>
                </select>
                <input type="submit" value="submit" />
            </form>

             {masterOrderList.map((order, index) =>
                <Order name={order.name}
                    type={order.type}
                    brand={order.brand}
                    key={index} />
            )}
        </div>
    );
}
export default OrderList;