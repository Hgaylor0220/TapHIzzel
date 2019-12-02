import React from 'react';
import Header from './Header';
import Home from './Home';
import OrderList from './OrderList';
import NewOrderControl from './NewOrderControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';
import ViewStock from './ViewStock';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterOrderList: []
    };
    this.handleAddingNewOrderToList = this.handleAddingNewOrderToList.bind(this);
  }

  handleAddingNewOrderToList(newOrder){
    var newMasterOrderList = this.state.masterOrderList.slice();
    newMasterOrderList.push(newOrder);
    this.setState({masterOrderList: newMasterOrderList});
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home} /> 
          <Route path='/orderList' render={()=><OrderList orderList={this.state.masterOrderList} />} />
          <Route path='/neworder' render={() => <NewOrderControl onNewOrderCreation={this.handleAddingNewOrderToList} />} />
          <Route path='/admin' render={(props)=><Admin orderList={this.state.masterOrderList} currentRouterPath={props.location.pathname}/>} />

        <Route path='/viewStock' render={(props) => <ViewStock orderList={this.state.masterOrderList} currentRouterPath={props.location.pathname} />} />

          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;