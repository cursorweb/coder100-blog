import Link from "next/link";

import { Meta } from "../components/meta";
import { Nav } from "../components/nav/nav";


export default function Index() {
  return (
    <>
      <Meta title="Coder100" />
      <Nav />

      <section id="home">
        <h1>Coder100</h1>
        <p>[adjective] Coder</p>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>Hi! I do coding stuff and other things too.</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <p>For now, check out <Link href="https://coder100s-project-list.coder100.repl.co/" target="_blank">this website</Link>, until I can get my act together.</p>
      </section>

      <section id="blog">
        <h2>Blog</h2>
        <p>View my blog!</p>
        <Link href="/blog">Click here</Link>
      </section>
    </>
  );
}
