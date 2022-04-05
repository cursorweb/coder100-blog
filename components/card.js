import Link from 'next/link'
import Image from 'next/image'

import styles from './card.module.css'

export function Card({ href, src, title, children, center = false }) {
  return (
    <div className={styles.card}>
      {src ? <Image src={src} alt="Image" />  : ''}
      <div className={`subtitle ${center ? 'center' : ''}`}><Link href={href}><a target="_blank">{title}</a></Link></div>
      {children}
    </div>
  )
}