const initialState = "";
function password(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_PASSWORD":
      return (state = action.payload);
    default:
      return state;
  }
}
export default password;
