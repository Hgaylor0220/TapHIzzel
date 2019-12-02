import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function OrderForm(props) {
  let _name = null;
  let _type = null;
  let _brand = null;
    
  function handleNewOrderFormSubmission(event) {
    event.preventDefault();
    props.newOrderSubmission({ name: _name.value, type: _type.value, brand: _brand.value, id: v4()});
    _name.value = '';
    _type.value = '';
    _brand.value = '';
    }
    return (
        <div>
           <form onSubmit={handleNewOrderFormSubmission}>
             <input
              type='text'
              id='name'
              placeholder='Name of beer'
              ref={(input) => { _name = input; }} />
            <input
              type='text'
              id='brand'
              placeholder='Brand of Beer'
              ref={(input) => { _brand = input; }} />
             <textarea
              id='type'
              placeholder='Type of Beed.'
              ref={(textarea) => { _type = textarea; }} />
            <button type='submit'>Subit Order!</button>
          </form>
        </div>
    );
}
OrderForm.propTypes = {
  newOrderSubmission: PropTypes.func
};

export default OrderForm;