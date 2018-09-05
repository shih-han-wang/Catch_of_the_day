// StorePicker
import React from 'react';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';
import h from '../helpers';
import { History } from 'react-router';

@autobind
class StorePicker extends React.Component {

  goToStore(event){
    event.preventDefault();
    var storeId = this.refs.storeId.value;
    this.history.pushState(null, '/store/' + storeId);
  }

  render(){
    return(
      <form className="store-selector" onSubmit={this.goToStore} >
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
        <input type="Submit" />
      </form>
    )
  }

}

reactMixin.onClass(StorePicker, History);

// var StorePicker = React.createClass({
//   mixins: [History],
//   goToStore: function(event){
//     event.preventDefault();
//     var storeId = this.refs.storeId.value;
//     this.history.pushState(null, '/store/' + storeId);
//   },
//   render: function(){
//     return(
//       <form className="store-selector" onSubmit={this.goToStore} >
//         <h2>Please Enter A Store</h2>
//         <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
//         <input type="Submit" />
//       </form>
//     )
//   }
// });

export default StorePicker;
