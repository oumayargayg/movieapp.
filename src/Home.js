import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import App from './App'
import Error from './Components/Error'



const Home = () => {
    return (
        <div>
            <Link className='maw' to="/" > <h1> Movie App Workshop </h1> </Link>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/*' component={Error} />
            </Switch>
        </div>
    )
}

export default Home