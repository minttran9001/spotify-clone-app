import React from "react";
import logo from "../../assets/images/Spotify_Logo_CMYK_White.png";
import Form from "../Form/Form";
import "./Login.scss";
export default function Login({ loginUrl }) {
  return (
    <div className="login">
      <div className="login-spotify">
        <img src={logo} alt="Logo" />
        <a href={loginUrl}>Continue with spotify</a>
      </div>
      <div className="or-row">
          <div className="line"></div>
          <p>OR</p>
          <div className="line"></div>
      </div>
        <div className="login-form">
        <Form/>
        </div>
    </div>
  );
}
