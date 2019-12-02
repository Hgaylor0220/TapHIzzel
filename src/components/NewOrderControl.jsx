import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import OrderForm from './OrderForm';
import PropTypes from 'prop-types';

class NewOrderControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
        this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
    }

    handleTroubleshootingConfirmation() {
        this.setState({ formVisibleOnPage: true });
       
    }
    

    render() {
        let currentlyVisibleContent = null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleContent = <OrderForm onNewOrderCreation={this.props.onNewOrderCreation} />;
        } else {
            currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation} />;
        }
        return (
            <div>
                {currentlyVisibleContent}
            </div>
        );
    }
}

NewOrderControl.propTypes = {
    onNewOrderCreation: PropTypes.func
};

export default NewOrderControl;