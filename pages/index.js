import Head from "next/head";
import Link from "next/link";

import { Meta } from "../components/meta";
import { Nav } from "../components/nav";


export default function Home({ blogs }) {
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
      </>
    </div>
  );
}
