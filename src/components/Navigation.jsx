import React from "react";
import { NavContainer, Menu, Logo } from "../global/styles/Navigation";
import { Drawer } from "./HamburgerDrawer";

export const Navigation = ({ setCategory }) => {
  return (
    <NavContainer>
      <Menu>
        <Drawer setCategory={setCategory} />
      </Menu>

      <Logo
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="logo"
      />
    </NavContainer>
  );
};
