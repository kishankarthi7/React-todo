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

  updateNewTextValue = (event) => {
    this.setState({
      newItemText: event.target.value,
    });
  };

  createNewTodo = () => {
    if (
      !this.state.todoItems.find(
        (item) => item.action === this.state.newItemText,
      )
    ) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          { action: this.state.newItemText, done: false },
        ],
        newItemText: '',
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <h4 className="bg-primary text-white text-center p-2">
            {this.state.userName}'s To Do List (
            {this.state.todoItems.filter((t) => !t.done).length} items to do)
          </h4>
          <button className="btn btn-primary" onClick={this.changeStateData}>
            Change
          </button>
        </div>
        <div className="container-fluid">
          <div className="my-1">
            <input
              className="form-control"
              value={this.state.newItemText}
              onChange={this.updateNewTextValue}
            />
            <button
              className="btn btn-primary mt-1"
              onClick={this.createNewTodo}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}
