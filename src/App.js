import React, { Component } from 'react';

import Base from './base';

class App extends Component {


  state = {
    orders: []
  };

  componentDidMount() {
    Base.syncState(`orders`, {
      context: this,
      state: 'orders',
      asArray: true
    });
  }

  render() {

    console.log(this.state);

    const {orders } = this.state;
    return (
      <div>
        {orders.map(order => (
          <div key={order.key}>{order.description}</div>
        ))}
      </div>
    );
  }
}

export default App;
