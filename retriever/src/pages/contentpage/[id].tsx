import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '../../../sanity/lib/sanity'; 
import { useRouter } from 'next/router';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Image from "next/image";

interface Post {
  _id: string;
  title: string;
  summary: string;
  image: string; 
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
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-0 font-sans">
      <Nav />
      <div className="mt-16">
        <h1 className="mt-20">{post.title}</h1>
        <div className="text-black">{post.summary}</div>
        {post.image && (
          <Image
            src={post.image} 
            alt={post.title}
            width={500} 
            height={400} 
            className="mt-4" 
          />
        )}
      </div>
      <Footer />
    </main>
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
  const query = `*[_type == "post" && _id == $id][0]{
    _id, 
    title, 
    summary, 
    "image": image.asset->url // Corrigido para 'url'
  }`;
  
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
