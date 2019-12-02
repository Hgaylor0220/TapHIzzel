import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Order from './Order';
import ViewStock from './ViewStock';
import Admin from './Admin';


class App extends React.Component() {
    render(){

  
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/' component={Home}/>
                    <Route exact path='/Viewstock' render={() => <ViewStock stockList={this.state.masterStockList} />} />
                    <Route path='/order' component={Order} />
                    <Route path='/admin' component={Admin} />
                </Switch>
            </div>

                );}
}

export default App;