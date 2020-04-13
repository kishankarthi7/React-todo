import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Adam',
      todoItems: [
        { action: 'Buy Flowers', done: false },
        { action: 'Get Shoes', done: false },
        { action: 'collect Tickets', done: true },
        { action: 'Call joe', done: false },
      ],
      newItemText: '',
    };
  }

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === 'Adam' ? 'Bob' : 'Adam',
    });
  };

  render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}'s To Do List
        </h4>
        <button className="btn btn-primary" onClick={this.changeStateData}>
          Change
        </button>
      </div>
    );
  }
}
