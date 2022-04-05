const initialState = {};

function user(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_USER":
      const newKey = { username: action.payload };
      return (state = { ...state, ...newKey });
    default:
      return state;
  }
}
export default user;
