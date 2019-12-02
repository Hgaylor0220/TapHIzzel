import React from 'react';
import taphizzlehome from '../assets/images/taphizzlehome.jpg';
import backgroundImage from '../assets/images/background.jpg';

function Home() {

    var homeStyling = {
        textAlign: 'center',
        fontFamily: 'Permanent Marker, cursive',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: '#B22222',
        textShadow: '3px 3px 0 #000',
        fontWeight: 'bold'
    };
    var imageStyle = {
        borderRadius: '8px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'


    };
    return (
        <div style={homeStyling}>
            <h1> Tap Hizzel</h1>
            <h1>Wellcome to the Tap Hizzel of the tap houses. </h1>
            <img src={taphizzlehome} style = {imageStyle} />
        </div>
    );
}
export default Home;
