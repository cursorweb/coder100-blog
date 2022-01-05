import Link from 'next/link'
import Head from 'next/head'

import { getPaths, getBlog } from '../lib/posts'

import styles from '../../styles/Home.module.css'
import { Aside } from '../../components/aside'


export async function getStaticPaths() {
  const paths = getPaths()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const data = getBlog(params.title)
  return {
    props: {
      data
    }
  }
}

export default function Post({ data }) {
  // todo: nav
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div className={styles.horiz}>
        <aside className={styles.top}>
          <div className="big">{data.title}</div>
          <div className="sub">{new Date(data.date).toDateString()}</div>
        </aside>
        <main className={`${styles.flex} ${styles.sub}`}>
          <article className={styles.main}>
            <div dangerouslySetInnerHTML={{ __html: data.html }} />
            <Link href="/"><a>&lt; Back</a></Link>
          </article>
          <Aside className={styles.sub} />
        </main>
      </div>
    </>
  )
}