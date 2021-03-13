import React from 'react'
import propTypes from 'prop-types'
import ButtonClasses from './BaseButton.module.css'
const BaseButton = ({ text, type }) => {
    const btnClass = type === ButtonClasses.Primary ? ButtonClasses.Primary : ButtonClasses.Secondary
    return (
        <button className={`${ButtonClasses.Button} ${btnClass}`}>
            {text}
        </button>
    )
}

BaseButton.propTypes = {
    text: propTypes.string.isRequired,
    type: propTypes.string
}
BaseButton.defaultProps = {
    type: ButtonClasses.Primary
}

export default BaseButton