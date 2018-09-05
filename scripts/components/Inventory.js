// Inventory

import React from 'react';
import AddFishForm from './AddFishForm';

class Inventory extends React.Component {
  render(){
     return(
       <div>
         <h2>Inventory</h2>
         {/* {Object.keys(this.props.fishes).map(this.renderInventory)} */}
         <AddFishForm {...this.props} />
         <button onClick={this.props.loadSamples} >Load Sample Fishes</button>
       </div>
     )
  }
}

Inventory.propTypes = {
  addFish: React.PropTypes.func.isRequired,
  loadSamples: React.PropTypes.func.isRequired,
  fishes: React.PropTypes.object.isRequired
}

// var Inventory = React.createClass({
//   // renderInventory: function(){
//   //   var linkState = this.props.linkState;
//   //   return(
//   //     <div className="fish-edit" key={key}>
//   //       <input type="text" valueLink={linkState('fishes.
//   //         '+ key +'.name')} />
//   //     </div>
//   //   )
//   // },
//   render: function(){
//      return(
//        <div>
//          <h2>Inventory</h2>
//          {/* {Object.keys(this.props.fishes).map(this.renderInventory)} */}
//          <AddFishForm {...this.props} />
//          <button onClick={this.props.loadSamples} >Load Sample Fishes</button>
//        </div>
//      )
//   },
//   propTypes: {
//     addFish: React.PropTypes.func.isRequired,
//     loadSamples: React.PropTypes.func.isRequired,
//     fishes: React.PropTypes.object.isRequired
//   }
// });

export default Inventory;
