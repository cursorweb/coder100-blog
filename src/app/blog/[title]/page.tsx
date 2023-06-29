import { getPaths, getBlog } from "../../../lib/posts";

import styles from "./style.module.css";
import { Layout } from "../../../components/blog/layout";


// export async function getStaticPaths() {
//     const paths = getPaths();
//     return {
//         paths,
//         fallback: false
//     };
// }

export async function generateStaticParams() {
    const paths = getPaths();
    
    return paths.map(title => ({ title }));
}

export default function Post({ params: { title } }: { params: { title: string } }) {
    const blog = getBlog(title);

    return (
        <>
            <Layout>
                <section className={styles.top}>
                    <div className={styles.big}>{blog.title}</div>
                    <div className={styles.small}>{new Date(blog.date).toDateString()}</div>
                </section>
                <div dangerouslySetInnerHTML={{ __html: blog.html }} />
            </Layout>
        </>
    );
}