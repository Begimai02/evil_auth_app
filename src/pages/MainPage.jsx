import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <Link to="/login">
        <h3>Let's Sign In!</h3>
      </Link>{" "}
      <Link to="/register">
        <h3>Don't have an account? Sign Up!</h3>
      </Link>
    </div>
  );
};

export default MainPage;
