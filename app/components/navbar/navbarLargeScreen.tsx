import styles from "./navbar.module.css";
import Link from "next/link";

interface INavbarLargeScreenProps {
  toggleMenu: () => void;
}

const NavbarLargeScreen: React.FC<INavbarLargeScreenProps> = ({
  toggleMenu,
}) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>AEON</div>
      <div className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </div>
      <div className={styles.desktopMenu}>
        <Link href="#">Showcase</Link>
        <Link href="#">Docs</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Analytics</Link>
        <Link href="#">Commerce</Link>
        <Link href="#">Templates</Link>
        <Link href="#">Enterprise</Link>
      </div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search documentation..."
          className={styles.searchInput}
        />
      </div>
    </div>
  );
};

export default NavbarLargeScreen;
