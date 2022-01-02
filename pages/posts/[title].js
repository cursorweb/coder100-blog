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
      {data.title} {new Date(data.date).toDateString()} {data.bio} <br/>
      <div dangerouslySetInnerHTML={{ __html: data.html }} />
    </>
  )
}