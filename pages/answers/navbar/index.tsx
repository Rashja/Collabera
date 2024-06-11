import React, { useState } from "react";
import styles from "./navbar.module.css";
import SearchLogo from "../../../app/components/searchLogo/searchLogo";
import NavbarLargeScreen from "../../../app/components/navbar/navbarLargeScreen";
import NavbarSmallScreen from "../../../app/components/navbar/navbarSmallScreen";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClickSearch = () => {
    setShowSearch((value) => !value);
  };

  return (
    <div className={styles.navbarContainer}>
      <NavbarLargeScreen toggleMenu={toggleMenu} />
      {isMenuOpen && (
        <NavbarSmallScreen
          toggleMenu={toggleMenu}
          handleClickSearch={handleClickSearch}
          showSearch={showSearch}
        />
      )}
    </div>
  );
};

export default NavBar;
