import React from 'react'
import ProductClasses from './Products.module.scss'
import Form from './Inc/Form'
import Alert from '../../BaseUtility/Alerts/Alert'
import Button from '../../BaseUtility/Button/BaseButton'
import { setPost } from '../../../Store/Actions/index'

import { connect } from 'react-redux'

const BaseCard = React.lazy(() => import('../../BaseUtility/Card/BaseCard'))

const Products = ({ posts, isDeleted, deletedId, getAllPosts }) => {
    let alertSection = null
    if (isDeleted) {
        alertSection = (
            <Alert text={`Post Removed. ID: ${deletedId}`} />
        )
    }
    const fetchPosts = () => {
        if (posts.length === 0) {
            getAllPosts()
        }
    }
    // console.log('[PRODUCTS PROPS.POSTS] ', posts)
    // console.log('[PRODUCTS PROPS.IS_DELETED] ', isDeleted)
    // console.log('[PRODUCTS PROPS.DELETED_ID] ', deletedId)
    return (
        <>
            <h1 className={ ProductClasses.Title }>Termékek</h1>
            { alertSection }
            <Form />
            <Button customClick={fetchPosts} text="Fetch 100 posts" />
            <section className={ProductClasses.CardContanier}>
                {posts.map(item => (
                    <BaseCard key={item.id}
                        id={item.id}
                        title={item.title}
                        body={item.body}
                    />
                ))}
            </section>
        </>
    )
}

const mapStateToProps = state =>{
    return{
        posts: state.posts,
        isDeleted: state.isDeleted,
        deletedId: state.deletedId
    }
}

const mapActionsToProps = dispatch => {
    return{
        getAllPosts: () => dispatch(setPost())
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Products)
