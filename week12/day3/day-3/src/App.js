import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [username, setUsername] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [userInput, setInput] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setPhoneInput("");
    setInput("");
  }, [users]);

  const setStates = () => {
    setUsername(userInput);
    setUsers([...users, userInput + " " + phoneInput]);
  };

  return (
    <div className="App">
      <h1>New user: {username}</h1>
      <h2>Name</h2>
      <input onChange={(e) => setInput(e.target.value)} type="text" />
      <h2>Phone Number</h2>
      <input onChange={(e) => setPhoneInput(e.target.value)} type="text" />
      <p></p>
      <button onClick={() => setStates()}>Add User</button>
      <h1>Users in our list</h1>
      {users?.map((user) => {
        return <p>{user} </p>;
      })}
    </div>
  );
}

export default App;
