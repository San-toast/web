const initialState = "";
function lastName(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_LASTNAME":
      return (state = action.payload);
    default:
      return state;
  }
}
export default lastName;
