import React from 'react'

const Item = props => {
    
    const {title, price} = props

    return(
        <div>
            <span>{title}</span>
            <span>{price}</span>
        </div>
    )
}


export default Item