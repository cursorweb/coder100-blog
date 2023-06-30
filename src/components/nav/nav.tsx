"use client";
import Link from "next/link";
import Image from "next/image";

import styles from "./nav.module.css";
import { usePathname } from "next/navigation";

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


export function Nav() {
    const path = usePathname();
    return (
        <nav className={styles.nav}>
            {links.map(({ href, src }, i) =>
                <Link href={href} key={i} className={[styles.link, href == path ? styles.selected : ""].join(" ")}>
                    {src}
                </Link>
            )}
        </nav>
    );
}