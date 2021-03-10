import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import './Navbar.scss'

const Navbar = ({title}) => {
    return (
        <nav className='navigation'>
            <h1 className="navigation-title">{title}</h1>
            <ul className='navigation-list'>
                <Link to='/'>
                    <li className='navigation-list-item'>Main Page</li>
                </Link>
                <Link to='/products'>
                    <li className='navigation-list-item'>Products</li>
                </Link>
            </ul>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string
}
export default Navbar
