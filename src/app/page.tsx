import Link from "next/link";
import styles from "../styles/Index.module.css";


function Section({ children, className = "", ...props }: { children: React.ReactNode, className?: string } & React.ComponentPropsWithoutRef<"section">) {
    return (
        <section {...props} className={styles.section + " " + className}>
            {children}
        </section>
    );
}

export default function Index() {
    return (
        <>
            <Section id="home">
                <h1>Coder100</h1>
                <p>[adjective] Coder</p>
            </Section>

            <Section id="about">
                <h2>About</h2>
                <p>Hi! I do coding stuff and other things too.</p>
            </Section>

            <Section id="projects">
                <h2>Projects</h2>
                <p>For now, check out <Link href="https://coder100s-project-list.coder100.repl.co/" target="_blank">this website</Link>, until I can get my act together.</p>
            </Section>

            <Section id="blog">
                <h2>Blog</h2>
                <p>View my blog!</p>
                <Link href="/blog">Click here</Link>
            </Section>
        </>
    );
}
