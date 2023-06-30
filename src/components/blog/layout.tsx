import { Aside } from "../aside/aside";

import styles from "./layout.module.css";


export function Layout({ children }: { children: React.ReactNode, path?: string }) {
    return (
        <>
            <main className={styles.flex}>
                <article className={styles.main}>
                    {children}
                </article>
                <Aside className={styles.sub} />
            </main>
        </>
    );
}