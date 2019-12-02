import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Order from './Order';
import ViewStock from './ViewStock';
import Admin from './Admin';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
        this.handleAddingNewOrderToList = this.handleAddingNewOrderToList.bind(this);
        this.handleAddingNewStockToList = this.handleAddingNewStockToList.bind(this);
    }
    NewOrderList(newOrder) {
        var newMasterOrderList = this.state.masterOrderList
        newmasterOrderList.push(newOrder);
        this.setState({ masterOrderList: newMasterOrderList });
    }
    
    render(){

  
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/Viewstock' render={() => <ViewStock stockList={this.state.masterStockList} />} />
                    <Route path='/Order' render={() => <Order orderList={this.state.masterOrderList} />} />
                    <Route path='/Admin' component={Admin} />
                    <Route component={Error404} />
                </Switch>
            </div>

                );}
}

export default App;