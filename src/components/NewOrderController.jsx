import React from 'react';

class NewOrderControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
    }

    render() {
        return (
            <div>
                <p>Submit and order here!</p>
            </div>
        );
    }
}   

export default NewOrderControl;