import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

import Link from "next/link";
import Login from "../components/Login";
import { useSession } from "next-auth/react";

function Home({ posts }) {
  const { data: session, status } = useSession();

  if (!session) return <Login />;
  console.log(posts);
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10  lg:py-0">
        <div className="space-y 5 px-10">
          <h1 className="max-w-xl font-serif text-6xl">
            {" "}
            <span className="underline decoration-black decoration-4">
              Medium
            </span>{" "}
            is place to write and connect
          </h1>
          <h2>
            {" "}
            It's easy and free post your thing on any topic and connect with
            million of readers
          </h2>
        </div>
        <img
          className="hidden h-32 md:inline-flex md:h-80 lg:h-full"
          src="images/Medium-logo.png"
          alt=""
        />
      </div>
      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
        {posts.map((post) => (
          <Link href={`Post/${encodeURIComponent(post.slug)}`}>
            <div className=" group cursor-pointer overflow-hidden rounded-lg border">
              <img
                className="h-60 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
                // src={urlFor(post.mainImage).url()}
                src={post.image}
                alt=""
              />
              <div className=" flex justify-between bg-white p-5">
                <div>
                  <p className="text-lg font-bold">{post.title}</p>
                  <p className="text-xs">
                    {post.content.substr(0, 50)} by{" "}
                    {session.user.name.toUpperCase()}
                  </p>
                </div>
                <img
                  className="h-12 w-12 rounded-full"
                  src={session.user.image}
                  // src={urlFor(post.author.image).url()}
                  alt={post.alt_text}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/api/");
  const posts = await res.json();
  return {
    props: { posts },
  };
}

export default Home;
