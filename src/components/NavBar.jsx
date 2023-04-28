import React from "react";
import useScrollInto from "../utils/hooks/useScrollInto";
import "../styles/Nav.css";

const HeaderNav = () => {
  const scrollTo = useScrollInto();
  const handleLink = (section) => {
    scrollTo(section);
  };

  return (
    <header className="header">
      <div>
        <nav className="nav">
          <ul>
            <a title="intro" href="#home" onClick={() => handleLink("intro")}>
              inicio
            </a>
            <a title="bio" href="#bio" onClick={() => handleLink("bio")}>
              bio
            </a>
            <a title="third" href="#third" onClick={() => handleLink("third")}>
              third
            </a>
          </ul>
        </nav>
      </div>
      <div className="buttons_lang"></div>
    </header>
  );
};
export default HeaderNav;
