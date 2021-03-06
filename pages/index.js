import Link from "next/link";

import { Meta } from "../components/meta";
import { Nav } from "../components/nav/nav";


export default function Index() {
  return (
    <>
      <Meta title="Coder100" />
      <Nav />

      <main>
        <h1>Coder100</h1>
      </main>

      <Link href="/blog">
        <a>To Blog</a>
      </Link>

      <h2>Projects</h2>
      <p>For now, check out <Link href="https://coder100s-project-list.coder100.repl.co/"><a target="_blank">this website</a></Link>, until I can get my act together.</p>
    </>
  );
}
