import React from "react";
import "./PageEnd.css";
import texts from "../_resources/texts.json";
const PageEnd = ({ lang }) => {
  return (
    <div
      className="page-end-container"
      style={{ height: "auto", width: "100%", backgroundColor: "black" }}
    >
      <div className="important-links">
        <button className="important-link">{texts[lang].footer[1]}</button>
        <button className="important-link">{texts[lang].footer[2]}</button>
        <button className="important-link">{texts[lang].footer[3]}</button>
      </div>
      <div className="company-info">
        <p className="info">
          Border Major League 2020 {"\u00a9"} {texts[lang].footer[4]}
        </p>
      </div>
    </div>
  );
};
export default PageEnd;
