import React, { useState }from 'react'
import CardClasses from './BaseCard.module.scss'
import PropTypes from 'prop-types'
import Alert from '../Alerts/Alert'

import { connect } from 'react-redux'
import {DELETE_POSTS} from '../../../Store/actions'

const Button = React.lazy(() => import('../Button/BaseButton'))
// const Alert = React.lazy(() => import('../Alerts/Alert'))

const BaseCard = ({ id, title, body, deletePost }) => {
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
                <p>ID: {id}</p>
            {/* {
            isAlertOpen ?
                <Alert text="Alert is open!" />:
                null
            } */}
            {alertSection}
            </section>
            <footer className={CardClasses.Footer}>
                <Button text="Remove ME!" customClick={() => deletePost(id)}/>
            </footer>
        </section>
    )
}

BaseCard.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => {
    return{
        deletePost: (inputId) => dispatch({ type: DELETE_POSTS, id: inputId})
    }
}

export default connect(null, mapDispatchToProps)(BaseCard)
