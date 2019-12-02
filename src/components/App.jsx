import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import StockList from './StockList';
import OrderList from './OrderList';
import Admin from './Admin';
import Error404 from './Error404';




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
    //         masterOrderList: []
    //         // masterStockList: []
        };
    //     this.handleAddingNewOrderToList = this.handleAddingNewOrderToList.bind(this);
    //     // this.handleAddingNewStockToList = this.handleAddingNewStockToList.bind(this);
    
    // NewOrderList(newOrder) {
    //     var newMasterOrderList = this.state.masterOrderList
    //     newmasterOrderList.push(newOrder);
    //     this.setState({ masterOrderList: newMasterOrderList });
    }
    
    render(){
        return (
            <div>
                <Header/>
                    <Switch>
                    <Route exact path='/' component={Home}/>
                    {/* <Route path='/stockList' render={() => <StockList stockList={this.state.masterStockList} />} />

                    <Route path='/Order' render={() => <OrderList orderList={this.state.masterOrderList} />} />

                    <Route path='/newOrder' render={() => <NewOrderController newOrderSubmission={this.handleAddingNewOrderToList} />} />

                     <Route path='/admin' render={(props) => <Admin orderList={this.state.masterOrderList} currentRouterPath={props.type.pathname} />} /> */}
                
                     {/* <Route component={Error404} /> */}
                </Switch>
             </div>

             );
         }
}

export default App;