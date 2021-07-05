import React from "react";
import { NavContainer, Menu } from "../global/styles/Navigation";
import { Drawer } from "./HamburgerDrawer";

export const Navigation = ({ setCategory }) => {
  return (
    <NavContainer>
      <Menu>
        <Drawer setCategory={setCategory} />
      </Menu>

      <img
        style={{ cursor: "pointer" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="80%"
        alt="logo"
      />
    </NavContainer>
  );
};
