import React from "react";
import { auth } from "./firebase";
import "./styles.css";
const guestUserInfo = JSON.parse(sessionStorage.getItem("user"));

const UserDisplay = ({ presentUser }) => {
  const calluser = function displayComment(guestUserInfo) {
    return guestUserInfo.map((user) => {
      return (
        <div>
          <li>{user.comments}</li>
        </div>
      );
    });
  };

  return (
    <div>
      <span>
        {" "}
        Welcome <b>{presentUser.email}</b>
      </span>
      &nbsp;&nbsp;
      <button onClick={() => auth.signOut()}>Sign Out</button>
      <div>Here are the customer comments!!</div>
      {sessionStorage.getItem("user") ? (
        calluser(guestUserInfo)
      ) : (
        <h1>no feedback</h1>
      )}
    </div>
  );
};

export default UserDisplay;
