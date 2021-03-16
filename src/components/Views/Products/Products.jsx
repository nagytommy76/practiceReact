import React from 'react'
import ProductClasses from './Products.module.scss'
import Form from './Inc/Form'
import Alert from '../../BaseUtility/Alerts/Alert'

import { connect } from 'react-redux'

const BaseCard = React.lazy(() => import('../../BaseUtility/Card/BaseCard'))

const Products = ({ posts, isDeleted, deletedId }) => {
    let alertSection = null
    if (isDeleted) {
        alertSection = (
            <Alert text={`Post Removed. ID: ${deletedId}`} />
        )
    }

    // const fetchItems = async () => {
    //     const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    //     const response = await data.json()
    //     setItems(response)
    // }
    // console.log('[PRODUCTS PROPS.POSTS] ', posts)
    // console.log('[PRODUCTS PROPS.IS_DELETED] ', isDeleted)
    // console.log('[PRODUCTS PROPS.DELETED_ID] ', deletedId)
    return (
        <>
            <h1 className={ ProductClasses.Title }>Termékek</h1>
            { alertSection }
            <Form />
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

export default connect(mapStateToProps)(Products)
