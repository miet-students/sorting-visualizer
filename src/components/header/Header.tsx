import React from "react";
import { HeaderBrandLink } from "./components/HeaderBrandLink";
import { HeaderLogo } from "./components/HeaderLogo";
import { HeaderThemeSwitcher } from "./components/HeaderThemeSwitcher";

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className="navbar p-0 mb-3 shadow-lg text-neutral-content">
      <HeaderLogo />

      <HeaderThemeSwitcher />
      <HeaderBrandLink
        brand={"github"}
        link={"https://github.com/miet-students/sorting-visualizer/"}
      />
    </header>
  );
};
