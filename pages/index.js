import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* eslint-disable-next-line */}
        <title>Coder100's Blog</title>
      </Head>
    </div>
  )
}


export function getStaticProps() {
  
}