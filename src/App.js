import React, { Component } from 'react';
import './App.css';




class App extends Component {
  state = {count:0}

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }


    render() {
    return (
      <div>
        <span className="value">{this.state.count}</span>
        <button onClick={this.increment} id="inc">Incrementa</button>
      </div>
    );
  }
}

export default App;
