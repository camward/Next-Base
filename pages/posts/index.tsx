import Head from "next/head";
import Link from "next/link";
import Heading from "../../components/Heading";
import { ucFirst } from "../../helpers";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_REMOTE_HOST}/posts?_start=0&_limit=15`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data },
  };
};

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts list:" />
      <ul>
        {posts &&
          posts.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{ucFirst(title)}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Posts;
