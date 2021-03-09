import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import './Header.scss'

// const BaseButton = React.lazy(() => import('../BaseUtility/BaseButton'))

const Navbar = ({title}) => {
    return (
        <nav className='navigation'>
            <h1 className="navigation-title">{title}</h1>
            <ul className='navigation-list'>
                <li className='navigation-list-item'>Teszt</li>
                <li className='navigation-list-item'>Teszt</li>
                <li className='navigation-list-item'>Teszt</li>
            </ul>
        </nav>
        /* <Suspense fallback={<h2>Loading...</h2>}>
            <BaseButton text='Bejelentkezés' type='primary'></BaseButton>
        </Suspense> */
    )
}
Navbar.propTypes = {
    title: PropTypes.string
}
export default Navbar
