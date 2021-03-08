import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import './Header.scss'

const BaseButton = React.lazy(() => import('../BaseUtility/BaseButton'))

const Header = ({title}) => {
    return (
        <header className="header">
            <h1 className="header-title">{title}</h1>
            <p className="header-sub-title">The first React app</p>
            {/* <button className='btn btn-primary' onClick={test}>Tesztelem</button> */}
            <Suspense fallback={<h2>Loading...</h2>}>
                <BaseButton></BaseButton>
            </Suspense>
        </header>
    )
}
// const test = (e) => {
//     console.log('lenyomtam az egeret')
//     console.log(e)
// }
Header.propTypes = {
    title: PropTypes.string
}
export default Header
