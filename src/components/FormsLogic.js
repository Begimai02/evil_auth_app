import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Forms from "./Forms";

const initUser = {
  email: "",
  password: "",
  passwordConfirm: "",
};

const FormsLogic = ({ title }) => {
  const [user, setUser] = useState(initUser);
  const navigate = useNavigate();

  const handleInps = (e) => {
    const newUser = {
      ...user,
      [e.target.name]: e.target.value,
    };
    setUser(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let prop in user) {
      if (title === "Sign In" && prop === "passwordConfirm") {
        continue;
      }
      if (user[prop].trim() === "") return alert("Fill all inputs!");
    }
    if (title === "Sign Up") {
      if (user.password !== user.passwordConfirm)
        return alert("Passwords didn't match!");
    }
    console.log(user);
    handleCheck(user);
    setUser(initUser);
  };

  const handleCheck = (user) => {
    let allUsers = JSON.parse(localStorage.getItem("allUsers"));
    if (!allUsers) {
      allUsers = [];
    }
    let foundUser = allUsers.filter((item) => user.email === item.email);
    if (title === "Sign In" && !foundUser)
      return alert("User is not exist! Please, Sing Up!");
    else {
      if (foundUser.password === user.password) {
        alert("Welcome back!");
      }
    }
  };
  return (
    <>
      <Forms
        title={title}
        userState={user}
        handleInps={handleInps}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default FormsLogic;
