import "./App.css";
import { useState } from "react";
import UserData from "./UserData";

function App() {
  const defaultState = {
    name: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    drop: "Volvo",
  };
  const defaultUserData = [
    { name: "", lastName: "", phone: "", email: "", message: "", drop: "" },
  ];
  const [inputField, setInputField] = useState(defaultState);
  const [userData, setUserData] = useState(defaultUserData);
  const changeCrap = (e) => {
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = (e) => {
    e.preventDefault();
    if (inputField.name === "") {
      alert("Bro put in your name pls");
      return;
    }
    if (inputField.lastName === "") {
      alert("Bro put in your last name pls");
      return;
    }
    if (inputField.phone === "") {
      alert("Bro put in your phone number pls");
      return;
    }
    if (inputField.email === "") {
      alert("Bro put in your email pls");
      return;
    }
    if (inputField.message === "") {
      alert("Bro put in a kind message pls");
      return;
    }
    if (inputField.drop === "") {
      alert("Bro select a thing pls");
      return;
    }
    setUserData([...userData, inputField]);
    setInputField(defaultState);
  };

  return (
    <div className="App">
      <h1>Contact Form</h1>
      <div className="container">
        <form action="\" onSubmit={(e) => validateForm(e)}>
          <label htmlFor="name">First Name</label>
          <input
            name="name"
            onChange={(e) => changeCrap(e)}
            type="text"
            placeholder="name"
            value={inputField?.name}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            onChange={(e) => changeCrap(e)}
            type="text"
            placeholder="last name"
            value={inputField?.lastName}
          />
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            onChange={(e) => changeCrap(e)}
            type="tel"
            placeholder="phone xxx-xxx-xxxx"
            value={inputField?.phone}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            onChange={(e) => changeCrap(e)}
            type="text"
            placeholder="email"
            value={inputField?.email}
          />
          <label htmlFor="message">Message</label>
          <input
            name="message"
            onChange={(e) => changeCrap(e)}
            type="text"
            placeholder="message"
            value={inputField?.message}
          />

          <label htmlFor="drop">Choose a thing:</label>
          <select name="drop" id="drop" onChange={(e) => changeCrap(e)}>
            {/* <option disabled></option> */}
            <option value={inputField?.drop}>Volvo</option>
            <option value={inputField?.drop}>Saab</option>
            <option value={inputField?.drop}>Opel</option>
            <option value={inputField?.drop}>Audi</option>
          </select>

          <input type="submit" value="Submit" />
        </form>
      </div>
      <UserData userData={userData} />
    </div>
  );
}

export default App;
