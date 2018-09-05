// App

import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Fish from './Fish';
import Order from './Order';

var App = React.createClass({
  // mixins: [Catalyst.LinkedStateMixin],
  getInitialState: function(){
    return {
      fishes: {},
      order: {}
    }
  },
  // componentDidMount: function(){
  //   base.syncState(this.props.params.storeId + '/fishes', {
  //     context: this,
  //     state: 'fishes'
  //   });
  // },
  addToOrder: function(key){
    this.state.order[key] = this.state.order[key] + 1 || 1;
    this.setState({ order: this.state.order });
  },
  addFish: function(fish){
    var timestamp = (new Date()).getTime();
    this.state.fishes['fish-' + timestamp] = fish;
    this.setState({ fishes: this.state.fishes });
  },
  loadSamples: function(){
    this.setState({
      fishes: require('../sample-fishes')
    });
  },
  renderFish: function(key){
    return <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>
  },
  render: function(){
     return(
       <div className="catch-of-the-day">
         <div className="menu">
           <Header tagline="Fresh Seafood Marker" />
           <ul className="list-of-fishes">
             {Object.keys(this.state.fishes).map(this.renderFish)}
           </ul>
         </div>
         <Order fishes={this.state.fishes} order={this.state.order}/>
         <Inventory addFish={this.addFish} loadSamples={this.loadSamples} fishes={this.state.fishes} linkState={this.linkState} />
       </div>
     )
  }
});

export default App;
