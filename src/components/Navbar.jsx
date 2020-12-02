import React from 'react'
import { connect } from 'react-redux'
import * as menuItemsAction from '../actions/menuItemsAction'

const Navbar = props => {

    let { title, location } = props

    try{
        if(location.path === "/"){
            return(
                <div className="navbar">
                    <div className="navbar__container">
                        <img alt="logo"/>
                        <h3></h3>
                        <div></div>
                    </div>
                </div>
            )
        }
    }catch{
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
}

const mapStateToProps = reducers => reducers.itemsReducer

export default connect(mapStateToProps, menuItemsAction)(Navbar)