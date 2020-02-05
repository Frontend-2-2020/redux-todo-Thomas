import React, { Component } from "react";
import { connect } from "react-redux";
import deleteAction from "../redux/actions/deleteAction";
import toggleAction from "../redux/actions/toggleAction";

class TodoItem extends Component {
  render() {
    const { todo, toggleTodo } = this.props;

    return (
      <li className="list-group-item d-flex flex-direction-row justify-content-between">
        {todo.name}
        <div>
          <img
            className="mr-4"
            onClick={toggleTodo}
            src={
              todo.done == false
                ? require("./../assets/icons/unchecked.png")
                : require("./../assets/icons/checked.png")
            }
            alt=""
          />
          <img src={require("./../assets/icons/trash.png")} alt="" />
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
    deleteTodo: deleted => dispatch(deleteAction(deleted))
  };
};

export default connect(mapStateToProps)(TodoItem);
