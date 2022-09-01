import React from "react";
import "./Barner.css";
import logo from "../asset/logo.png";

function Banner() {
  return (
    <div className="lmj-banner">
      <img src={logo} alt="la maison jungle" className="lmj-logo"></img>
      <h1 className="lmj-title">La maison jungle</h1>
    </div>
  );
}

export default Banner;
