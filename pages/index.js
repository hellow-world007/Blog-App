import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/lib/post-util";
import { Fragment } from "react";
import Head from "next/head";

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Joy's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredData = getFeaturedPosts();

  return {
    props: {
      posts: featuredData,
    },
  };
}
