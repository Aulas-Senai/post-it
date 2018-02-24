import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from '../navbar'
import Home from '../page/home'
import AboutUs from '../page/aboutUs'
import Contact from '../page/contact'
import Login from '../page/login'
import NotFound from '../page/notFound'


const App = () => (
    <React.Fragment>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/quem-somos" render={AboutUs} />
        <Route path="/contato" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/nao-encontrada" component={NotFound} />
    </React.Fragment>
)

export default App