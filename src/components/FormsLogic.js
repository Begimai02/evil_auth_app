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
    title === "Sign Up" ? handleNewUser(user) : handleCheck(user);
  };

  const getUsers = () => {
    let allUsers = JSON.parse(localStorage.getItem("allUsers"));
    if (!allUsers) {
      allUsers = [];
    }
    return allUsers;
  };

  const handleCheck = (user) => {
    let allUsers = getUsers();
    let userOn = false;

    let foundUser = allUsers.find((item) => user.email === item.email);

    if (!foundUser) {
      alert("The user doesn't exist! Please, try again!");
      return;
    } else if (foundUser && foundUser.password !== user.password) {
      alert("There is no user with such password! Please, try again!");
      return;
    } else if (foundUser && foundUser.password === user.password) {
      userOn = true;
      alert("Welcome back!");
    }

    localStorage.setItem("user-is-on", JSON.stringify(userOn));
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    navigate("/");
    setUser(initUser);
  };

  const handleNewUser = (user) => {
    let allUsers = getUsers();
    let userOn = false;

    let foundUserEmail = allUsers.find((item) => user.email === item.email);
    let foundUserPass = allUsers.find(
      (item) => user.password === item.password
    );

    if (foundUserEmail || foundUserPass) {
      return alert(
        "There is a user with such email or password! Please, try again!"
      );
    } else {
      userOn = true;
      allUsers.push(user);
      alert("Successfully signed up!");
    }
    localStorage.setItem("user-is-on", JSON.stringify(userOn));
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    navigate("/");
    setUser(initUser);
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
