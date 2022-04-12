import { Meta } from "../../components/meta";

import { getPaths, getBlog } from "../../lib/posts";

import styles from "../../styles/Blog.module.css";
import { Layout } from "../../components/blog/layout";


export async function getStaticPaths() {
  const paths = getPaths();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const data = getBlog(params.title);
  return {
    props: {
      data
    }
  };
}

export default function Post({ data }) {
  return (
    <>
      <Meta title={data.title} desc={data.bio} />
      <Layout>
        <aside className={styles.top}>
          <div className={styles.big}>{data.title}</div>
          <div className={styles.small}>{new Date(data.date).toDateString()}</div>
        </aside>
        <div dangerouslySetInnerHTML={{ __html: data.html }} />
      </Layout>
    </>
  );
}