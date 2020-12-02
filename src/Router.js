import React from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Main from './pages/Main'
import Menu from './pages/Menu'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route exact path="/:menu" component={Menu}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router