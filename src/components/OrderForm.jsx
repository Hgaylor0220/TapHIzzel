import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import backgroundImage from '../assets/images/background.jpg';

function OrderForm(props) {
  let _name = null;
  let _type = null;
  let _brand = null;
  let _quantity= null;
    
  function handleOrderFormSubmission(event) {
    event.preventDefault();
      props.onNewOrderCreation({ name: _name.value, type: _type.value, brand: _brand.value, id: v4() });
    _name.value = '';
    _type.value = '';
    _brand.value = '';
    _quantity.value = '';
    }
    var mainStyling = {
        textAlign: 'center',
        fontFamily: 'Permanent Marker, cursive',
        flex: '1',
        color: '#B22222',
        textShadow: '3px 3px 0 #000',
        fontWeight: 'bold'
    };
    
    return (
        <div style={mainStyling}>
    
           <form onSubmit={handleOrderFormSubmission}>
              
             <input
              type='text'
              id='name'
              placeholder='Name'
              ref={(input) => { _name = input; }} />

             <input
                type='text'
                id='quantity'
                placeholder='Quantity'
                    ref={(input) => { _quantity = input; }} />

            <input
              type='text'
              id='brand'
              placeholder='Brand'
              ref={(input) => { _brand = input; }} />
              
             <textarea
              id='type'
              placeholder='Type of Beer ex: IPA, Stout, Craft.'
              ref={(textarea) => { _type = textarea; }} />

            <button type='submit'>Subit Order!</button>
          </form>
        </div>
    );
}
OrderForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default OrderForm;