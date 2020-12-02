import React from 'react'
import { Link } from 'react-router-dom'

const Selector = props => {

    const {img, title, link, key} = props
    
    return(
        <Link to={link} key={key} style={{textDecoration: 'none'}}>
            <div className="selector">
                <img src={img} />
                <h3>{title}</h3>
            </div>
        </Link>
    )
}

export default Selector