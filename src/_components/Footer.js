import React from "react";
import CompleteLogo from "../_img/complete.png";
import VoltLogo from "../_img/volt.png";
import LogitechLogo from "../_img/logitech.png";
import "./Footer.css";
const Footer = ({ lang, texts }) => {
  return (
    <div className="footer-container">
      <div
        className="logo-container"
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <img src={CompleteLogo} alt="complete-logo" className="brand-logo" />
      </div>
      <div className="logo-container">
        <img src={VoltLogo} alt="complete-logo" className="brand-logo" />
      </div>
      <div className="logo-container">
        <img src={LogitechLogo} alt="complete-logo" className="brand-logo" />
      </div>
    </div>
  );
};
export default Footer;
