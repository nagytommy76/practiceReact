import React, {useState, useEffect, Fragment} from 'react'
import ProductClasses from './Products.module.scss'
// import Aux from '../../HOC/Auxiliary'
const BaseCard = React.lazy(() => import('../../BaseUtility/Card/BaseCard'))

const Products = props => {
    useEffect(() => {
        fetchItems()
    },[])

    const [product, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const response = await data.json()
        setItems(response)
    }

    return (
        // <Aux>
        <Fragment>
            <h1 className={ ProductClasses.Title }>Termékek</h1>
            <section className={ProductClasses.CardContanier}>
                {product.map(item => (
                    <BaseCard key={item.id}
                        title={item.title}
                        body={item.body}
                    />
                ))}
            </section>
        </Fragment>
        // </Aux>
    )
}

export default Products
