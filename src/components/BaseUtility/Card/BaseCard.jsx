import React from 'react'
import CardClasses from './BaseCard.module.scss'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import {SET_DELETED_TO_DEFAULT} from '../../../Store/Actions/actionTypes'
import { removePost } from '../../../Store/Actions/index'

const Button = React.lazy(() => import('../Button/BaseButton'))


const BaseCard = ({ id, title, body, deletePost }) => {
    return (
        <section className={CardClasses.Card}>
            <header className={CardClasses.Header}>
                <h1>{ title }</h1>
            </header>
            <section className={CardClasses.Body}>
                <p>{body}</p>
                <p>ID: {id}</p>
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
        deletePost: (inputId) => {
            dispatch(removePost(inputId))
            setTimeout(() => dispatch({ type: SET_DELETED_TO_DEFAULT }), 2500)
        },
        
    }
}

export default connect(null, mapDispatchToProps)(BaseCard)
