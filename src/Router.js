import React from 'react'
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Main from './pages/Main'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router