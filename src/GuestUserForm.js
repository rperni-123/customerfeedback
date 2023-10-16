import React, { useEffect, useState } from "react";
import axios from "axios";

function Form() {
  const [inputValues, setInputValues] = useState({});
  // const [iid, setId] = useState('')

  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setInputValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userJSON = JSON.stringify([inputValues]);
    var str = sessionStorage.getItem("user");

    if (sessionStorage.getItem("user") == null) {
      sessionStorage.setItem("user", userJSON);
    } else {
      const getUser = JSON.parse(str);

      sessionStorage.setItem(
        "user",
        JSON.stringify([{ ...inputValues }, ...getUser])
      );
    }
    localStorage.setItem("GuestUserEvent", "False");
    window.location.reload();
    alert("your feedback has been successfully submitted");
  };

  return (
    <div>
      <u>Please fill the form and submit</u>
      <form id="form" onSubmit={handleSubmit}>
        <div>
          <label for="name">Name{"  "}</label>
          <input
            type="text"
            id="name"
            value={inputValues.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label for="email">Email{"  "}</label>
          <input
            type="email"
            id="email"
            value={inputValues.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label for="company">Company{"  "}</label>
          <input
            type="text"
            id="company"
            value={inputValues.company}
            onChange={handleChange}
          />
        </div>
        <div>
          <label for="comments">Comments{"  "}</label>
          <textarea
            id="comments"
            value={inputValues.comments}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      {localStorage.setItem("GuestUserEvent", "False")}
    </div>
  );
}

export default Form;
