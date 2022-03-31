import { useSession } from "next-auth/react";
import React from "react";

import Header from "../../components/Header";

function Post({ post }) {
  const { data: session } = useSession();
  console.log(post);
  return (
    <div>
      <main>
        {/* <Header /> */}
        <img
          className="w-full h-40 object-cover"
          src={post.image}
          alt="image"
        />
        <article className="mx-w-3xl mx-auto p-5">
          <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
          <h2 className="text-xl font-light text-gray-500 mb-2">
            {post.content}
          </h2>
          <div className="flex items-center space-x-2">
            <img className="h-10 w-10 rounded-full " src={post.image} alt="" />
            <p className="font-extralight text-sm">
              Blog Post by
              <span className="text-green-600"> </span>-Published
              {/* at {post.created_at.toLocaleString()} */}
            </p>
            <div>
              <img src={post.image} alt="" />
            </div>
          </div>
        </article>
        <hr className="max-w-lg my-5 mx-auto border border-yellow-500" />
        <form action="" className="flex flex-col p-5 max-w-2xl mx-auto mb-10">
          <h3 className="text-sm text-yellow-500 ">Enjoyed this Article?</h3>
          <h4 className="text-3xl font-bold"> Leave a comment bellow</h4>
          <hr className="py-3 mt-2" />
          <label className="block mb-5">
            <span className="text-gray-700">name</span>
            <input
              className="shadow-border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring-yellow-5001"
              type="text "
              placeholder="Name"
            />
          </label>
          <label className="block mb-5">
            <span className="text-gray-700">Email</span>
            <input
              className="shadow-border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring-yellow-5001"
              type="text "
              placeholder="Email....."
            />
          </label>
          <label className="block mb-5">
            <span className="text-gray-700">Comments</span>
            <input
              className="shadow-border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring-yellow-5001"
              type="text "
              placeholder="Comment......"
            />
          </label>
          {/* <label htmlFor="">
            <span className="text-gray-700">name</span>
            <input className="shadow-border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring-yellow-5001"type="text " placeholder="Name" />
          </label> */}
        </form>
      </main>
    </div>
  );
}

export default Post;

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "java-for-beginers" } }],
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:8000/api/${params.slug}`);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}
