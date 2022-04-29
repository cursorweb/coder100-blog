import Link from "next/link";
import Image from "next/image";

import styles from "./nav.module.css";

const links = [{
  href: "/",
  src: <>
    <Image
      alt="Logo"
      src="/cookie.png"
      width="20" height="20"
    />
    &nbsp;
    Coder100
  </>,
}, {
  href: "/blog",
  src: <>
    Blog
  </>,
}];


export function Nav({ path = "/" }) {
  return (
    <nav className={styles.nav}>
      {links.map(({ href, src }, i) =>
        <Link href={href} key={i}>
          <a className={[styles.link, href == path ? styles.selected : ""].join(" ")}>
            {src}
          </a>
        </Link>
      )}
    </nav>
  );
}