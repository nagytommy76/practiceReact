import React from 'react'
import propTypes from 'prop-types'
import ButtonClasses from './BaseButton.module.css'
const BaseButton = ({ text, customClick, type }) => {
    const btnClass = type === ButtonClasses.Primary ? ButtonClasses.Primary : ButtonClasses.Secondary
    return (
        <button onClick={customClick} className={`${ButtonClasses.Button} ${btnClass}`}>
            {text}
        </button>
    )
}

BaseButton.propTypes = {
    text: propTypes.string.isRequired,
    customClick: propTypes.func,
    type: propTypes.string
}
BaseButton.defaultProps = {
    type: ButtonClasses.Primary
}

export default BaseButton