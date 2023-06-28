import { Meta } from "../../components/meta";

import { getPaths, getBlog } from "../../lib/posts";

import styles from "../../styles/Blog.module.css";
import { Layout } from "../../components/blog/layout";
import { GetStaticProps, InferGetStaticPropsType } from "next";


export async function getStaticPaths() {
    const paths = getPaths();
    return {
        paths,
        fallback: false
    };
}

export const getStaticProps: GetStaticProps = ({ params }) => {
    const data = getBlog(params!.title as string);
    return {
        props: {
            data
        }
    };
};

export default function Post({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Meta title={data.title} desc={data.bio} />
            <Layout>
                <section className={styles.top}>
                    <div className={styles.big}>{data.title}</div>
                    <div className={styles.small}>{new Date(data.date).toDateString()}</div>
                </section>
                <div dangerouslySetInnerHTML={{ __html: data.html }} />
            </Layout>
        </>
    );
}