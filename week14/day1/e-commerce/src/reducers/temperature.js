const initialState = {
  city: "",
  temperature: "",
  key: "",
};
function weather(state = initialState, action) {
  switch (action.type) {
    case "WEATHER":
      return { ...state, key: action.payload };
    case "TEMP":
      return {
        ...state,
        city: action.payload.city,
        temperature: action.payload.temperature,
        key: initialState.key,
      };
    default:
      return state;
  }
}
export default weather;
