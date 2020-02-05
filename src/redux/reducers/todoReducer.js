const defaultState = [];

function todoReducer(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_TODOS":
      return action.payload;
    case "DELETE_TODO":
      return action.payload;
    case "TOGGLE_TODO":
      return action.payload;
    default:
      return state;
  }
}

export default todoReducer;
