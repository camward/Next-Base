import Head from "next/head";
import PostInfo from "../../components/PostInfo";
import { ucFirst } from "../../helpers";

export const getStaticPaths = async () => {
  const response = await fetch(`${process.env.API_REMOTE_HOST}/posts/`);
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`${process.env.API_REMOTE_HOST}/posts/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post: data },
  };
};

const Post = ({ post }) => (
  <>
    <Head>
      <title>{ucFirst(post.title)} | Post page</title>
    </Head>
    <PostInfo post={post} />
  </>
);

export default Post;
