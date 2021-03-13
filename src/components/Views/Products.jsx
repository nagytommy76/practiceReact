import React, {useState, useEffect} from 'react'
// import PropTypes from 'prop-types'

const Products = props => {
    useEffect(() => {
        fetchItems()
    },[])

    const [product, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        const response = await data.json()
        setItems(response)
        console.log(response)
    }

    return (
        <>
            <h1>Termékek</h1>
            {product.map(item => (
                <section key={item.id} className='card'>
                    <h1>{item.title}</h1>
                    <p>{item.body}</p>
                </section>
            ))}
        </>
    )
}

// Products.propTypes = {

// }

export default Products
