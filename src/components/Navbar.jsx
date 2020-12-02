import React from 'react'

const Navbar = props => {

    const { title } = props

    return(
        <div className="navbar">
            <div className="navbar__container">
                <img alt="logo"/>
                <h3>{title}</h3>
                <div></div>
            </div>
        </div>
    )
}

export default Navbar