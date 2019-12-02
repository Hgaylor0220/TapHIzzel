

// function NewTicketForm() {
//     return (
//         <div>
//             <form >
//                 <label>New Order </label>
//                 <select>
//                     <option value="IPA">IPA</option>
//                     <option value="logger">Logger</option>
//                     <option value="cider">Cider</option>
//                     <option value="ale">Ale</option>
//                     <option value="stout">Stout</option>
//                     <option value="indianPaleAle">IndianPaleAle</option>
//                     <option value="porter">Porter</option>
//                     <option value="craft">Craft</option>
//                 </select>
//                 <input type="submit" value="Submit Beer Order" />
//             </form>
//         </div>
//     );
// }



import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

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
                    ref={(input) => { brand = input; }} />
                <textarea
                    id='type'
                    placeholder='Type of Beed.'
                    ref={(textarea) => { type = textarea; }} />
                <button type='submit'>Subit Order!</button>
            </form>
        </div>
    );
}

NewOrderForm.propTypes = {
    newOrderSubmission: PropTypes.func
};

export default OrderForm;