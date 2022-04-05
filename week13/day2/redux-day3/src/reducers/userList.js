const initialState = [];

function userList(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_USERLIST":
      return (state = [...state, action.payload]);
    default:
      return state;
  }
}
export default userList;
