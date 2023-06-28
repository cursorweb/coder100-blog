import { Aside } from "../aside/aside";
import { Nav } from "../nav/nav";

import styles from "./layout.module.css";


export function Layout({ children, path }: { children: React.ReactNode, path?: string }) {
    return (
        <>
            <Nav path={path} />
            <main className={styles.flex}>
                <article className={styles.main}>
                    {children}
                </article>
                <Aside className={styles.sub} />
            </main>
        </>
    );
}