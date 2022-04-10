import { Meta } from "../components/meta";

import { Card } from "../components/card";
import { Layout } from "../components/blog/layout";


import { getBlogs } from "../lib/posts";
import "../styles/BlogHome.module.css";


export default function Home({ blogs }) {
  // todo: make this a new component called layout
  return (
    <>
      <Meta title="Coder100's Blog" />

      <Layout>
        <div className="title">Coder100&apos;s Blog</div>
        <p>Welcome to my blog! Click around and read my blog posts! I&apos;m an avid coder, youtuber, and a musician. Happy reading!</p>
        {blogs.map(({ url, title, bio, date }, i) => (
          <Card key={i} title={title} href={`/posts/${url}`}>
            <div className="small-sub">{new Date(date).toDateString()}</div>
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