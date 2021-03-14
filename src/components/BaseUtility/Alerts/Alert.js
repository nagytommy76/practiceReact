import React from 'react'
import AlertClasses from './Alert.module.scss'
import PropTypes from 'prop-types'

const Alert = ({ text, type }) => {
    const AlertType = type === 'danger' ? AlertClasses.Danger : AlertClasses.Success
    return (
        <section className={`${AlertClasses.Alert} ${AlertType}`}>
            <p>{text}</p>
        </section>
    )
}

Alert.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string
}

Alert.defaultProps ={
    type: 'danger'
}

export default Alert
