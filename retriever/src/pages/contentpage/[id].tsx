import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '../../../sanity/lib/sanity'; 
import { useRouter } from 'next/router';

interface PostImage {
  asset: {
    url: string;
  };
}

interface Post {
  _id: string;
  title: string;
  summary: string;
}

interface PostPageProps {
  post: Post;
}

const PostPage = ({ post }: PostPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.summary}</div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const query = `*[_type == "post"]{ _id }`;
    const posts = await client.fetch(query);
  
    const paths = posts.map((post: { _id: string }) => ({
      params: { id: post._id },
    }));
  
    return {
      paths,
      fallback: true,
    };
};
  
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "post" && _id == $id][0]`;
    const post = await client.fetch(query, { id: params?.id });
  
    if (!post) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: {
        post,
      },
      revalidate: 60,
    };
};
  
export default PostPage;
