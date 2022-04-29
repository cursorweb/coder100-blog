import Link from "next/link";

import { Meta } from "../components/meta";

import { Card, CardTitle } from "../components/card/card";
import { Layout } from "../components/blog/layout";


import { getBlogs } from "../lib/posts";
import styles from "../styles/BlogHome.module.css";


export default function Home({ blogs }) {
  // todo: make this a new component called layout
  return (
    <>
      <Meta title="Coder100's Blog" />

      <Layout path="/blog">
        <div className={styles.title}>Coder100&apos;s Blog</div>
        <p>Welcome to my blog! Click around and read my blog posts! I&apos;m an avid coder, youtuber, and a musician. Happy reading!</p>
        {blogs.map(({ url, title, bio, date }, i) => (
          <Card key={i}>
            <CardTitle>
              <Link href={`/posts/${url}`}>
                <a>{title}</a>
              </Link>
            </CardTitle>
            <div className={styles.smallSub}>{new Date(date).toDateString()}</div>
            <div>{bio}</div>
          </Card>
        ))}
      </Layout>
    </>
  );
}


export function getStaticProps() {
  const blogs = getBlogs();

  return {
    props: {
      blogs
    }
  };
}