import Head from 'next/head'

import { Aside } from '../components/aside'
import { Card } from '../components/card'

import styles from '../styles/Home.module.css'


import { getBlogs } from './lib/posts'

export default function Home({ blogs }) {
  // todo: make this a new component called layout
  return (
    <div className={styles.container}>
      <Head>
        {/* eslint-disable-next-line */}
        <title>Coder100's Blog</title>
      </Head>
  
      <main className={styles.flex}>
        <article className={styles.main}>
          <div className="title">Coder100&apos;s Blog</div>
          <p>Welcome to my blog! Click around and read my blog posts! I&apos;m an avid coder, youtuber, and a musician. Happy reading!</p>
          {blogs.map(({ url, title, bio, date }, i) => (
            <Card key={i} title={title} href={`/posts/${url}`}>
              <div className="small-sub">{new Date(date).toDateString()}</div>
              <div>{bio}</div>
            </Card>
          ))}
        </article>
        <Aside className={styles.sub} />
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