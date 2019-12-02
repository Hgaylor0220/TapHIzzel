import React from 'react';
import OrderForm from './OrderForm';
import PropTypes from 'prop-types';

class NewOrderController extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
    }

    render() {
        
        return (
            <div>
               <p>your order </p>
            </div>
        );
    }
}

NewOrderController.propTypes = {
    onNewOrderCreation: PropTypes.func
};

export default NewOrderController;