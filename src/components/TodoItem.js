import React, { Component } from "react";
import { connect } from "react-redux";
import deleteAction from "../redux/actions/deleteAction";
import toggleAction from "../redux/actions/toggleAction";

class TodoItem extends Component {
  render() {
    const { todo, toggleTodo, deleteTodo } = this.props;

    return (
      <li className="list-group-item d-flex flex-direction-row justify-content-between">
        {todo.name}
        <div>
          <img
            className="mr-4"
            // onClick={toggleTodo}
            src={
              todo.done == false
                ? require("./../assets/icons/unchecked.png")
                : require("./../assets/icons/checked.png")
            }
            alt=""
          />
          <img
            onClick={() => deleteTodo(todo.id)}
            src={require("./../assets/icons/trash.png")}
            alt=""
          />
        </div>
      </li>
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
    toggleTodo: done => dispatch(toggleAction(done)),
    deleteTodo: id => dispatch(deleteAction(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
