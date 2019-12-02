import React from 'react';
import backgroundImage from '../assets/images/background.jpg';
import Stock from './Stock';

// var masterViewStock = [
//     {
//         name: 'Dead Guy IPA',
//         brand: 'Rouge Ales',
//         price: '$5 pint',
//         alcoholContent: '6.8%'
//     },
//     {
//         name: 'loggEliot Ness',
//         brand: 'Great Lakes Brewing Co',
//         price: '$4.50 pint',
//         alcoholContent: '6.1%'
//     },
//     {
//         name: 'Coors Light',
//         brand: 'Coors Brewing Company',
//         price: '$3 pint',
//         alcoholContent: '4.2%'
//     },
//     {
//         name: 'Ginger Apple Cider',
//         brand: 'Soultree',
//         price: '$6 pint',
//         alcoholContent: '7.45'
//     }, 
//     {
//         name: 'Foothills Sexual Chocolate',
//         brand: 'Foothills gang',
//         price: '$6 pint',
//         alcoholContent: '9.6%'
//     }, 
//     {
//         name: 'Hoppyright Infringement',
//         brand: 'NOLA Brewery',
//         price: '$7.50 pint',
//         alcoholContent: '7.6%'
//     }
// ];
   

function ViewStock(){
    var stockStyling = {
        textAlign: 'center',
        fontFamily: 'Permanent Marker, cursive',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: '#8B0000',
        fontWeight: 'bold'
    };
    var selectionStyle ={
        fontFamily: 'Permanent Marker, cursive',
        color: '#8B0000',
        fontWeight:'bold'
    }
    return(
        <div style={stockStyling}>
            <h1>Current Inventory </h1>
            {/* {masterViewStock.map((stock, index) =>
                <Stock
                    name={stock.name}
                    brand={stock.brand}
                    price={stock.price}
                    alcoholContent={stock.alcoholContent}
                    key={index} />
            )}
            <form className= 'card'>
                <label style={selectionStyle}>Select type of beer to order</label>
                <select>
                    <option value="IPA">IPA</option>
                    <option value="logger">Logger</option>
                    <option value="cider">Cider</option>
                    <option value="craft">Craft</option>
                    <option value="stout">Stout</option>
                    <option value="indianPaleAle">IndianPaleAle</option>
                    <option value="porter">Porter</option>
                </select>
                <input type="submit" value="submit" />
            </form> */}
        </div>
    );
}
export default ViewStock;
