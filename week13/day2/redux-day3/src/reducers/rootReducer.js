import { combineReducers } from "redux";
import name from "./nameReducer";
import email from "./emailReducer";
import password from "./passwordReducer";
import user from "./userReducer";
import lastName from "./lastNameReducer";
import userList from "./userList";
import weather from "./weatherReducer";
export default combineReducers({
  name,
  email,
  password,
  user,
  lastName,
  userList,
  weather,
});
