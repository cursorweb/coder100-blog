import Link from 'next/link'
import styles from './nav.module.css'

export function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Coder100&apos;s Blog</a>
      </Link>
    </nav>
  )
}