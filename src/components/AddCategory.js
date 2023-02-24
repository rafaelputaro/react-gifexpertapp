import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (event) => {    
        setinputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // prevenir vacío
        if (inputValue.trim().length >= 2){
            setCategories(cats => [inputValue, ...cats]);
            setinputValue('');
        }        
    }

    return (
        <form onSubmit={ handleSubmit}>
            <input
            type='text'
            value={ inputValue }
            onChange={ handleInputChange }
            /> 
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}