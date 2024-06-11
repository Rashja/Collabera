import Link from "next/link";
import SearchLogo from "../searchLogo/searchLogo";
import styles from "./navbar.module.css";

interface INavbarSmallScreenProps {
  showSearch: boolean;
  handleClickSearch: () => void;
  toggleMenu: () => void;
}

const NavbarSmallScreen: React.FC<INavbarSmallScreenProps> = ({
  showSearch,
  toggleMenu,
  handleClickSearch,
}) => {
  return (
    <div className={styles.mobileMenu}>
      <div className={styles.mobileLogo}>
        <div className={styles.title}>AEON</div>
        {showSearch && (
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search documentation..."
              className={styles.searchInputSmallMenu}
            />
          </div>
        )}
        <div className={styles.mobileLogoAction}>
          <span onClick={handleClickSearch}>
            <SearchLogo />
          </span>
          <span onClick={toggleMenu}>X</span>
        </div>
      </div>
      <Link href="#">Showcase</Link>
      <Link href="#">Docs</Link>
      <Link href="#">Blog</Link>
      <Link href="#">Analytics</Link>
      <Link href="#">Commerce</Link>
      <Link href="#">Templates</Link>
      <Link href="#">Enterprise</Link>
    </div>
  );
};

export default NavbarSmallScreen;
