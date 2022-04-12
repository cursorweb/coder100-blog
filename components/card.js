import Link from "next/link";
// import Image from "next/image";

import styles from "./card.module.css";

export function Card({ href, title, children, center = false, tab = false }) {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className=[], center = false }) {
  return (
    <div className={[styles.header, center ? styles.center : "" , ...className].join(" ")}>
      {children}
    </div>
  );
}