import "./styles.css";

import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import UserAuth from "./UserAuth";
import UserDisplay from "./UserDisplay";
import GuestUserForm from "./GuestUserForm";

const App = () => {
  const [presentUser, setPresentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setPresentUser({
          uid: user?.uid,
          email: user?.email
        });
      } else {
        setPresentUser(null);
      }
    });
  }, []);
  return (
    <div>
      <center>
        {localStorage.getItem("GuestUserEvent") == "True" ? (
          <GuestUserForm />
        ) : presentUser ? (
          <UserDisplay presentUser={presentUser} />
        ) : (
          <UserAuth />
        )}
      </center>
    </div>
  );
};

export default App;
