import { WEATHER } from "../action-types/index";
const initialState = "";
function weather(state = initialState, action) {
  switch (action.type) {
    case WEATHER:
      return (state = action.payload);
    default:
      return state;
  }
}
export default weather;
