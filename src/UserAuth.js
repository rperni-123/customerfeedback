import React, { useState } from "react";
import { auth } from "./firebase";
import GuestUserForm from "./GuestUserForm";

const UserAuth = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [toggleGuestUser, settoggleGuestUser] = useState("False");
  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  };
  const openGuestUserForm = () => {
    settoggleGuestUser("True");
    localStorage.setItem("GuestUserEvent", "True");
  };
  return (
    <div>
      <center>
        <form autoComplete="off">
          <h1>Customer Feedback Application</h1>
          <p>
            Instruction: Please sign up first, give the valid email id and pwd
            should be atleast 6 chars{" "}
          </p>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={changeHandler}
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={changeHandler}
          />
          <br />
          <button onClick={signIn}>Sign In</button> &nbsp;&nbsp;
          <button onClick={signUp}>Sign up</button> &nbsp;&nbsp;
          <button onClick={openGuestUserForm}>Guest User</button>
        </form>
      </center>
    </div>
  );
};

export default UserAuth;
