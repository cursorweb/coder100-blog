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

      <div className={styles.title}>Coder100&apos;s Blog</div>
      <div className={styles.desc}>Welcome to my blog! Click around and read my blog posts!</div>

      <main>
        <article>
          {blogs.map(({ url, title, bio, date }, i) => (
            <div key={i}>
              <Link href={`posts/${url}`}>
                <a>Click to view</a>
              </Link>
              {title}
              {bio}
              {new Date(date).toDateString()}
            </div>
          ))}
        </article>
        <aside>
          <div>
            <a href="https://github.com/cursorweb">My Github!</a>
          </div>
          <div>
            <a href="https://replit.com/@Coder100">My Replit!</a>
          </div>
          <div>
            <a href="https://dev.to/cursorweb">My Dev.to!</a>
          </div>
          <div>
            <a href="https://www.youtube.com/channel/UCT6iqa1_JyKmoinvyUl7nSQ?sub_confirmation=1">My Youtube Channel!</a>
          </div>
        </aside>
      </main>
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