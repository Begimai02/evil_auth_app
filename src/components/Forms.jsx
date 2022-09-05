import React from "react";
import "./styles/Forms.css";

const Forms = ({ title }) => {
  return (
    <div className="form-wrapper">
      <h2>{title} page</h2>
      <form className="form">
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
        />
        <button type="submit">{title}</button>
      </form>
    </div>
  );
};

export default Forms;
