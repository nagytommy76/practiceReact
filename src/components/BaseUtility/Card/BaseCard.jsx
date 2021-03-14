import React, { useState }from 'react'
import CardClasses from './BaseCard.module.scss'
import PropTypes from 'prop-types'
import Alert from '../Alerts/Alert'
const Button = React.lazy(() => import('../Button/BaseButton'))
// const Alert = React.lazy(() => import('../Alerts/Alert'))

const BaseCard = ({ title, body }) => {
    const [isAlertOpen, setAlert] = useState(false)
    function openAlert(){
        setAlert(!isAlertOpen)
        setTimeout(() => setAlert(false), 2500)
    }
    let alertSection = null
    if (isAlertOpen) {
        alertSection = (
            <Alert text="Alert is open!" />
        )
    }
    return (
        <section className={CardClasses.Card}>
            <header className={CardClasses.Header}>
                <h1>{ title }</h1>
            </header>
            <section className={CardClasses.Body}>
                <p>{body}</p>
            {/* {
            isAlertOpen ?
                <Alert text="Alert is open!" />:
                null
            } */}
            {alertSection}
            </section>
            <footer className={CardClasses.Footer}>
                <Button text="Click Me!" customClick={openAlert}/>
            </footer>
        </section>
    )
}


BaseCard.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default BaseCard
