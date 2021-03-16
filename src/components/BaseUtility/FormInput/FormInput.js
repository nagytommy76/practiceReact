import React from 'react'
import PropTypes from 'prop-types'
import classes from './FormInput.module.scss'

const FormInput = ({ type, labelText, placeholder, inputValue, setInputVal }) => {
    return (
        <div className={classes.FormInput}>
            <label htmlFor="">{labelText}</label>
            <input 
                value={inputValue}
                onChange={setInputVal}
                type={type}
                className={classes.Input}
                placeholder={placeholder}
            />
        </div>
    )
}

FormInput.propTypes = {
    type: PropTypes.string,
    labelText: PropTypes.string,
    placeholder: PropTypes.string
}

FormInput.defaultProps = {
    type: 'text'
}

export default FormInput
