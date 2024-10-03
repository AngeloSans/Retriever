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
  likes: string;
  content: string;
  owner: string;
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
      <div className=" mt-16">
        <h1 className="text-2xl font-bold mt-20 text-center">{post.title}</h1>
        <div className="text-black text-center">{post.summary}</div>
        {post.image && (
          <Image
            src={post.image} 
            alt={post.title}
            width={800} 
            height={800} 
            className="align-middle mt-4" 
          />
        )}
        <h2 className="text-black">{post.likes}</h2>
        <h2 className="text-black">{post.owner}</h2>
        <p className="text-black text-center">{post.content}</p>
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
    likes, 
    content,
    owner,
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
