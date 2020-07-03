import React from "react";
import CompleteLogo from '../_img/complete.png'
import './Footer.css'
const Footer = ({ lang, texts }) => {
  return (
    <div className="footer-container">
      <div className="complete-logo">
        <img src={CompleteLogo} alt="complete-logo" />
      </div>
      <div className="important-links">
        <a className="important-link">{texts[lang].footer[1]}</a>
        <a className="important-link">{texts[lang].footer[2]}</a>
        <a className="important-link">{texts[lang].footer[3]}</a>
      </div>
      <div className="company-info">
        <p className="important-link info">Border Major League 2020 {'\u00a9'} {texts[lang].footer[4]}</p>
      </div>
    </div>
  );
};
export default Footer;
