import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Form() {
  const name = useSelector((state) => state.name);
  const email = useSelector((state) => state.emai);
  const password = useSelector((state) => state.password);
  const user = useSelector((state) => state.user);
  const lastName = useSelector((state) => state.lastName);
  const userList = useSelector((state) => state.userList);
  const dispatch = useDispatch();
  const changeInputField = (e) => {
    dispatch({
      type: `CHANGE_${e.target.name.toUpperCase()}`,
      payload: e.target.value,
    });
  };
  return (
    <div className="form">
      <h1>Form</h1>
      <input
        name="name"
        type="text"
        onChange={changeInputField}
        value={name}
        placeholder="name"
      ></input>
      <input
        name="lastName"
        type="text"
        onChange={changeInputField}
        placeholder="last name"
        value={lastName}
      ></input>
      <input
        name="email"
        type="text"
        onChange={changeInputField}
        placeholder="email"
        value={email}
      ></input>
      <input
        name="password"
        type="text"
        onChange={changeInputField}
        placeholder="password"
        value={password}
      ></input>
      <input
        name="user"
        type="text"
        onChange={changeInputField}
        placeholder="user"
        value={user.username}
      ></input>
      <input
        name="userList"
        onChange={changeInputField}
        placeholder="Add a user"
        type="text"
      ></input>
      <button onClick={() => userList?.map((user) => <p>{user}</p>)}>
        Submit
      </button>
      <div>
        {userList?.map((user) => (
          <p>{user}</p>
        ))}
      </div>
    </div>
  );
}
