import React from 'react'
import propTypes from 'prop-types'
import './BaseButton.scss'
const BaseButton = ({ text, type }) => {
    return (
        <button className={`btn btn-${type}`}>
            {text}
        </button>
    )
}

BaseButton.propTypes = {
    text: propTypes.string,
    type: propTypes.string
}
export default BaseButton