import Link from 'next/link'
import Head from 'next/head'

import { getPaths, getBlog } from '../lib/posts'

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
      {data.title} {new Date(data.date).toDateString()} {data.bio} <br/>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
      <Link href="/"><a>&lt; Back</a></Link>
    </>
  )
}