import Link from "next/link";

import { Card, CardTitle } from "../card/card";

import styles from "./aside.module.css";


export function Aside({ className }) {
  const links = [{
    name: "GitHub",
    link: "https://github.com/cursorweb"
  }, {
    name: "Replit",
    link: "https://replit.com/@Coder100"
  }, {
    name: "Dev.to",
    link: "https://dev.to/cursorweb"
  }, {
    name: "Youtube",
    link: "https://www.youtube.com/channel/UCT6iqa1_JyKmoinvyUl7nSQ"
  }, {
    name: "Twitter",
    link: "https://twitter.com/Coder1002"
  }, {
    name: "Itch.io",
    link: "https://cursorgames.itch.io/"
  }];

  return (
    <aside className={`${className ?? ""} ${styles.aside}`}>
      <div className={styles.subtitle}>Links</div>
      {links.map(({ name, link }, i) =>
        <Card key={i} className={styles.customCard}>
          <CardTitle center className={styles.customTitle}>
            <Link href={link} target="_blank" className={styles.noUnderline}>{name}</Link>
          </CardTitle>
        </Card>
      )}
    </aside>
  );
}