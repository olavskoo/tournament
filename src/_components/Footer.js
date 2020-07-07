import React from "react";
import CompleteLogo from "../_img/complete.png";
import "./Footer.css";
const Footer = ({ lang, texts }) => {
  return (
    <div className="footer-container">
      <div className="complete-logo">
        <img src={CompleteLogo} alt="complete-logo" />
      </div>
    </div>
  );
};
export default Footer;
