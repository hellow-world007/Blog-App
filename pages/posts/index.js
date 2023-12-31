import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/post-util";
import { Fragment } from "react";
import Head from "next/head";

export default function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all Programming-related tutorials and posts !" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps(){
  const allPostsData = getAllPosts();

  return {
    props: {
      posts: allPostsData
    }
  }
}

