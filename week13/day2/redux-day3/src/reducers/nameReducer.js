const initialState = "";
function name(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return (state = action.payload);
    default:
      return state;
  }
}
export default name;
