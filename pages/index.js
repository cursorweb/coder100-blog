import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { getBlogs } from './lib/posts'

export default function Home({ blogs }) {
  return (
    <div className={styles.container}>
      <Head>
        {/* eslint-disable-next-line */}
        <title>Coder100's Blog</title>
      </Head>

      {blogs.map(({ url, title, bio, date }, i) => (
        <div key={i}>
          <Link href={`posts/${url}`}>Click to view</Link> {title} {bio} {new Date(date).toDateString()}
        </div>
      ))}
    </div>
  )
}


export function getStaticProps() {
  const blogs = getBlogs()

  return {
    props: {
      blogs
    }
  }
}