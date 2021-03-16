import React from 'react'
import CardClasses from './BaseCard.module.scss'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import {DELETE_POSTS, SET_DELETED_TO_DEFAULT} from '../../../Store/Actions/actions'

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
            dispatch({ type: DELETE_POSTS, id: inputId})
            setTimeout(() => dispatch({ type: SET_DELETED_TO_DEFAULT }), 2500)
        }
    }
}

export default connect(null, mapDispatchToProps)(BaseCard)
