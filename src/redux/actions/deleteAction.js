export default function deleteAction(id) {
  return {
    type: "DELETE_TODO",
    payload: id
  };
}
