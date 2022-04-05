import { Aside } from '../aside'
import { Nav } from '../nav'

import styles from './layout.module.css'


export function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={styles.flex}>
        <article className={styles.main}>
          {children}
        </article>
        <Aside className={styles.sub} />
      </main>
    </>
  )
}