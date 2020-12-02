import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as menuItemsAction from '../actions/menuItemsAction'

const Menu = props => {

    const { GetMenuItemsAction, items } = props
    console.log(props)
    useEffect(()=>{
        GetMenuItemsAction((props.match.params.menu).toLowerCase().replace(/í/, 'i').replace(/ó/, 'o').replace(/é/, 'e'))
    }, [])

    return(
        <div>

        </div>
    )
}

const mapStateToProps = reducers => reducers.itemsReducer

export default connect(mapStateToProps, menuItemsAction)(Menu)