import React from 'react';
import Header from './Header';
import OrderList from './OrderList';
import NewOrderControl from './NewOrderControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterOrderList: []
    };
    this.handleAddingNewOrderToList = this.handleAddingNewOrderToList.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateOrderElapsedWaitTime(),
    5000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateOrderElapsedWaitTime() {
    let newMasterOrderList = this.state.masterOrderList.slice();
    newMasterOrderList.forEach((ticket) =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({masterOrderList: newMasterOrderList});
  }

  handleAddingNewOrderToList(newOrder){
    var newMasterOrderList = this.state.masterOrderList.slice();
    newOrder.formattedWaitTime = (newOrder.timeOpen).fromNow(true);
    newMasterOrderList.push(newOrder);
    this.setState({masterOrderList: newMasterOrderList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><OrderList ticketList={this.state.masterOrderList} />} />
          <Route path='/newticket' render={()=><NewOrderControl onNewOrderCreation={this.handleAddingNewOrderToList} />} />
          <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterOrderList} currentRouterPath={props.location.pathname}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }

}

export default App;