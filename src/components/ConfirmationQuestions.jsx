import React from 'react';
import PropTypes from 'prop-types';
import backgroundImage from '../assets/images/background.jpg';

function ConfirmationQuestions(props) {
    var mainStyling = {
        textAlign: 'center',
        fontFamily: 'Permanent Marker, cursive',
        backgroundImage: `url(${backgroundImage})`,
        flex: '1',
        color: '#B22222',
        textShadow: '3px 3px 0 #000',
        fontWeight: 'bold'
    };
    return (
        <div style={mainStyling}>
            <h3>Have you double checked the current stock?</h3>
            <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
        </div>
    );
}

ConfirmationQuestions.propTypes = {
    onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;