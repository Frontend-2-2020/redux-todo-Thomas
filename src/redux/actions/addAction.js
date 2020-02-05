export default function addAction(newTodo) {
  return {
    type: "ADD_TODO",
    payload: {
      name: newTodo,
      done: false
    }
  };
}
