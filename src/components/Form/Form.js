import React from "react";
import Button from "../Button/Button";
import "./Form.scss";
export default function Form({ onSubmit }) {
  return (
    <form className="auth-form" onSubmit={onSubmit}>
      <div className="input-group">
        <label htmlFor="username">Email address or username</label>
        <input
          placeholder="Email address or username"
          type="text"
          className="auth-input"
          name="username"
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          placeholder="Password"
          type="password"
          name="password"
          className="auth-input"
        />
      </div>
      <a href="#" className="password-reset">
        Forgot your password
      </a>
      <div className="submit-row">
        <div className="remember-me">
          <input type="checkbox" name="checbox" />
          <label htmlFor="checkbox">Remember me</label>
        </div>
        <Button>Log in</Button>
      </div>
    </form>
  );
}
