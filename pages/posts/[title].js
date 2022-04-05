import Head from 'next/head'

import { getPaths, getBlog } from '../../lib/posts'

import styles from '../../styles/Blog.module.css'
import { Layout } from '../../components/blog/layout'


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
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <Layout>
        <aside className={styles.top}>
          <div className="big">{data.title}</div>
          <div className="sub">{new Date(data.date).toDateString()}</div>
        </aside>
        <div dangerouslySetInnerHTML={{ __html: data.html }} />
      </Layout>
    </>
  )
}