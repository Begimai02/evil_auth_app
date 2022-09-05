import React from "react";
import { Link } from "react-router-dom";
import "./styles/Forms.css";

const Forms = ({ title, userState, handleInps, handleSubmit }) => {
  return (
    <div className="form-wrapper">
      <h2>{title} page</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="text-label">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          autoComplete="email"
          className="text-input"
          tabIndex={1}
          value={userState.email}
          onChange={handleInps}
        />
        <label htmlFor="password" className="text-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="password"
          className="text-input"
          tabIndex={2}
          value={userState.password}
          onChange={handleInps}
        />
        {title === "Sign Up" ? (
          <>
            <label htmlFor="password-confirm" className="text-label">
              Password Confirm
            </label>
            <input
              type="password"
              name="passwordConfirm"
              id="password-confirm"
              autoComplete="password-confirm"
              className="text-input"
              tabIndex={3}
              value={userState.passwordConfirm}
              onChange={handleInps}
            />
          </>
        ) : null}
        <button className="submit-btn" type="submit">
          {title}
        </button>
      </form>
      <div className="form-link">
        {title === "Sign In"
          ? "Don't have an account?"
          : "Already have an account?"}{" "}
        <Link to={title === "Sign In" ? "/register" : "/login"}>
          {title === "Sign In" ? "Sign Up!" : "Sign In!"}
        </Link>
      </div>
    </div>
  );
};

export default Forms;
