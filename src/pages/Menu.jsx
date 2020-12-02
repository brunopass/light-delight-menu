import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as menuItemsAction from '../actions/menuItemsAction'
import Navbar from '../components/Navbar'

const Menu = props => {

    const { GetMenuItemsAction, items } = props
    console.log(props)
    useEffect(()=>{
        GetMenuItemsAction((props.match.params.menu).toLowerCase().replace(/í/, 'i').replace(/ó/, 'o').replace(/é/, 'e'))
    }, [])

    return(
        <div>
            <Navbar/>

        </div>
    )
}

const mapStateToProps = reducers => reducers.itemsReducer

export default connect(mapStateToProps, menuItemsAction)(Menu)