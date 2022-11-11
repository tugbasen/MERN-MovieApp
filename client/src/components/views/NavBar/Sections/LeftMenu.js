import React from "react";
import { Menu } from "antd";
import "./Navbar.css";

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="favorite">
        <a
          href="/favorite"
          className="noHover"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Favorite
        </a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
