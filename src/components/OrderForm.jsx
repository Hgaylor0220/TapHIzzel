import React from 'react';

function NewTicketForm() {
    return (
        <div>
            <form >
                <label>New Order </label>
                <select>
                    <option value="IPA">IPA</option>
                    <option value="logger">Logger</option>
                    <option value="cider">Cider</option>
                    <option value="ale">Ale</option>
                    <option value="stout">Stout</option>
                    <option value="indianPaleAle">IndianPaleAle</option>
                    <option value="porter">Porter</option>
                    <option value="craft">Craft</option>
                </select>
                <input type="submit" value="Submit Beer Order" />
            </form>
        </div>
    );
}

export default NewTicketForm;