import React from 'react';
import backgroundImage from '../assets/images/background.jpg';

function Order(){
    var orderStyling = {
        textAlign: 'center',
        fontFamily: 'Permanent Marker, cursive',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        color: '#8B0000',
        fontWeight: 'bold'
    };

    return(
        
        <div style={orderStyling}>
            <h1> Order Page</h1>
            <form>
                <label>New Order </label>
                    <select>
                        <option value="IPA">IPA</option>
                        <option value="logger">Logger</option>
                        <option value="cider">Cider</option>
                        <option value="ale">Ale</option>
                        <option value="stout">Stout</option>
                        <option value="indianPaleAle">IndianPaleAle</option>
                        <option value="porter">Porter</option>
                    </select>
                <input type ="submit" value = "submit"/>
            </form>
        </div>
    );
}
export default Order;