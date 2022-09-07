import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const getUserStatus = () => {
  let userOn = JSON.parse(localStorage.getItem("user-is-on"));
  if (!userOn) {
    userOn = false;
  }
  console.log(userOn, "here");
  return userOn;
};

const MainPage = () => {
  const [isUserOn, setIsUserOn] = useState(false);

  useEffect(() => {
    setIsUserOn(getUserStatus());
  }, []);

  const handleLogOut = () => {
    localStorage.setItem("user-is-on", JSON.stringify(false));
    setIsUserOn(false);
  };
  return (
    <div className="app">
      <div className="main">
        <h1>Welcome to the Lo-Fi Center</h1>
        {isUserOn ? (
          <div className="main-on">
            <div className="main-on-avatar"></div>
            <p className="main-on-lofi">
              Let's listen some good{" "}
              <a href="https://www.youtube.com/watch?v=jfKfPfyJRdk">lo-fi</a>
            </p>
            <button onClick={handleLogOut} className="logout-btn">
              Log Out!
            </button>
          </div>
        ) : (
          <div className="main-off">
            <Link to="/login">
              <h3 className="singin">Let's Sign In!</h3>
            </Link>{" "}
            <Link to="/register">
              <h3 className="singup">Don't have an account? Sign Up!</h3>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
