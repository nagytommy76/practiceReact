import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import NavbarClasses from './Navbar.module.scss'

const Navbar = ({title}) => {
    return (
        <nav className={NavbarClasses.navigation}>
            <h1 className={NavbarClasses.title}>{title}</h1>
            <ul className={NavbarClasses.list}>
                <Link className={NavbarClasses.item} to='/'>Main Page</Link>
                <Link className={NavbarClasses.item} to='/products'>Products</Link>
            </ul>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string
}
export default Navbar
