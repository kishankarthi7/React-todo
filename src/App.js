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

  toggleTodo = (todo) =>
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item,
      ),
    });

  todoTableRows = () =>
    this.state.todoItems.map((item) => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChnage={() => this.toggleTodo(item)}
          />
        </td>
      </tr>
    ));

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
          <table className="table table-stripped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{this.todoTableRows()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
