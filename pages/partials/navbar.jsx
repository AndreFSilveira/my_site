import Link from "next/link";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contato</a>
          </Link>
        </li>
        <li>
          <Link href="/price">
            <a>Preços</a>
          </Link>
        </li>
        <li>
          <Link href="/service">
            <a>Serviços</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
