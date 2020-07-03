import React from "react";
import * as Icon from "react-feather";
import { Menu, Dropdown } from "antd";
const NavBar = ({ lang, setLanguage, texts }) => {
  let isLogged = false;
  const langMenu = (
    <Menu>
      {lang == "es" ? (
        <Menu.Item>
          <a onClick={() => setLanguage("en")}>Inglés</a>
        </Menu.Item>
      ) : (
        <Menu.Item>
          <a onClick={() => setLanguage("es")}>Spanish</a>
        </Menu.Item>
      )}
    </Menu>
  );
  return (
    <div className="header">
      <nav>
        <div className="logo" />
        <a>{texts[lang].nav[1]}</a>
        <a>{texts[lang].nav[2]}</a>
        <a>{texts[lang].nav[3]}</a>
        <a>{texts[lang].nav[4]}</a>
      </nav>
      <div className="controls">
        <Dropdown overlay={langMenu} placement="bottomLeft" arrow>
          <a className="control">
            <p class="control-stamp">{lang}</p>
            <Icon.Globe color={"#e2e2e2"} />
          </a>
        </Dropdown>
        <a className="control">
          <Icon.User color={"#e2e2e2"} />
          {isLogged ? null : (
            <p class="control-stamp">{texts[lang].login_stamp}</p>
          )}
        </a>
      </div>
    </div>
  );
};
export default NavBar;
