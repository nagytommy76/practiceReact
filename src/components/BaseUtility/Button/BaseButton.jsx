import React from 'react'
import propTypes from 'prop-types'
import ButtonClasses from './BaseButton.module.css'
const BaseButton = ({ text, type }) => {
    const BtnClass = [ButtonClasses.Button]
    BtnClass.push(ButtonClasses.Primary)
    return (
        <button className={BtnClass.join(' ')}>
            {text}
        </button>
    )
}
BaseButton.propTypes = {
    text: propTypes.string.isRequired,
    type: propTypes.string
}
BaseButton.defaultProps = {
    type: 'Primary'
}

export default BaseButton