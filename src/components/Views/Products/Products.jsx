import React, {/*useState, useEffect*/} from 'react'
import ProductClasses from './Products.module.scss'
import Button from '../../BaseUtility/Button/BaseButton'

import { connect } from 'react-redux'
import {SET_POSTS} from '../../../Store/actions'

const BaseCard = React.lazy(() => import('../../BaseUtility/Card/BaseCard'))

const Products = ({ posts, setPosts }) => {
    // useEffect(() => {
    //     // fetchItems()
    // },[])

    // const [product, setItems] = useState([])

    // const fetchItems = async () => {
    //     const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    //     const response = await data.json()
    //     setItems(response)
    // }
    console.log('[PRODUCTS PROPS.POSTS] ', posts)
    return (
        <>
            <h1 className={ ProductClasses.Title }>Termékek</h1>
            <Button text="Még egy poszt hozzáad" customClick={setPosts}/>
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
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setPosts: () => dispatch({ type: SET_POSTS, payload: {id: Math.floor(Math.random() * 1000), body: 'Ezt én adtam hozzá', title:'Ezt a Products.js ből adtam hozzá'}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
