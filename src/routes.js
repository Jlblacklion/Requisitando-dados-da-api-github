import React from 'react';
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom';

import Repositors from './pages/repositories';
import Home from './pages/home';

// Outra forma de criar função e exporta-la
export default function Routes(){
    return (
        <BrowserRouter>
             <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/repositors' component={Repositors} />
            </Switch> 
        </BrowserRouter>
    )
}