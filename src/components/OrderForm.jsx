import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import backgroundImage from '../assets/images/background.jpg';

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
        <div  style={mainStyling}>
           <form onSubmit={handleNewOrderFormSubmission}>
               <div className="col 4">
             <input
              type='text'
              id='name'
              placeholder='Name of beer'
              ref={(input) => { _name = input; }} />
              </div>
              <div className="col 4">
            <input
              type='text'
              id='brand'
              placeholder='Brand of Beer'
              ref={(input) => { _brand = input; }} />
              </div>
             <div className="col 4">
             <textarea
              id='type'
              placeholder='Type of Beed.'
              ref={(textarea) => { _type = textarea; }} />
              </div>
            <button type='submit'>Subit Order!</button>
          </form>
        </div>
    );
}
OrderForm.propTypes = {
  newOrderSubmission: PropTypes.func
};

export default OrderForm;