import Link from "next/link";

import { Card, CardTitle } from "../../components/card/card";
import { Layout } from "../../components/blog/layout";


import { getBlogs } from "../../lib/posts";
import styles from "./styles.module.css";


export const metadata = {
    title: "Coder100's Blog",
    description: "The blog of Coder100",
};


export default function Home() {
    const blogs = getBlogs();

    return (
        <>
            <Layout path="/blog">
                <div className={styles.title}>Coder100&apos;s Blog</div>
                <p>Welcome to my blog! Click around and read my blog posts! I&apos;m an avid coder, youtuber, and a musician. Happy reading!</p>
                {blogs.map(({ url, title, bio, date }, i) => (
                    <Card key={i}>
                        <CardTitle>
                            <Link href={`/blog/${url}`}>
                                {title}
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