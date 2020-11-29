import React from 'react'
import Selector from '../base/Selector'
import Navbar from '../components/Navbar'
import Seo from '../base/Seo'
import { connect } from 'react-redux'


const Main = props => {
    const { opciones } = props

    return(
        <div className="main">
            <Seo color="#45A584" title="Bienvenido - Light Delight Adrogue"/>
            <Navbar/>

            <div className="main__holder">

                <h1 className="main__title">Bienvenido!</h1>

                <div className="main__container">
                    {opciones.map(({title, img, link},key)=>(
                        <Selector title={title} img={img} link={link} key={key}/>
                    ))}
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (reducers) => {
    return reducers.menuReducer
}

export default connect(mapStateToProps, {/* actions */} )(Main)