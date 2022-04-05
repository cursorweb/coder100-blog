import Link from "next/link";
import styles from "./nav.module.css";

export function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.link}>Coder100</a>
      </Link>
    </nav>
  );
}