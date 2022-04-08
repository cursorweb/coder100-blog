import Head from "next/head";
import Link from "next/link";

import { Meta } from "../components/meta";
import { Nav } from "../components/nav";


export default function Index() {
  // todo: make this a new component called layout
  return (
    <div>
      <Meta title="Coder100" />

      <>
        <Nav />
        <h1>Coder100&apos;s Website</h1>
        <Link href="/blog">
          <a>To Blog</a>
        </Link>

        <h2>Projects</h2>
        <p>For now, check out <Link href="https://coder100s-project-list.coder100.repl.co/"><a target="_blank">this website</a></Link>, until I can get my act together.</p>
      </>
    </div>
  );
}
