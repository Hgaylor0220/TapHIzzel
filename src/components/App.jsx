import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Order from './Order';
import ViewStock from './ViewStock';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/viewstock' component={ViewStock} />
                <Route path='/order' component={Order} />
            </Switch>
        </div>
    );
}

export default App;