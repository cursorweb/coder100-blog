import Link from "next/link";
import Image from "next/image";

import styles from "./nav.module.css";


export function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.link}><Image alt="Logo" src="/cookie.png" layout="fill" /></a>
      </Link>
    </nav>
  );
}