import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";
import TodoItem from "./components/TodoItem";
import addAction from "./redux/actions/addAction";

class App extends Component {
  componentDidMount() {
    axios
      .get("http://5de80f759578cb001487adea.mockapi.io/Todo")
      .then(response => {
        this.props.fetchTodos(response.data);
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    const newTodo = document.getElementById("itemInput").value;
    this.props.addTodo(newTodo);
  };

  render() {
    const { todos } = this.props;
    return (
      <div className="container mt-4">
        <nav className="navbar navbar-light bg-secondary justify-content-between">
          <a className="navbar-brand">Todo-app Redux</a>
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="New todo"
              id="itemInput"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Add
            </button>
          </form>
        </nav>
        <ul className="list-group">
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    todos: store
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: data => dispatch({ type: "FETCH_TODOS", payload: data }),
    addTodo: newTodo => dispatch(addAction(newTodo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
