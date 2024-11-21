import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '../../../sanity/lib/sanity';
import { useRouter } from 'next/router';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  _id: string;
  title: string;
  summary: string;
  image: string;
  date: string;
  content: string;
  owner: string;
}

interface RelatedPost {
  _id: string;
  title: string;
  summary: string;
  image: string;
}

interface PostPageProps {
  post: Post;
  relatedPosts: RelatedPost[];
}

const PostPage = ({ post, relatedPosts }: PostPageProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post || !post.title || !post.summary) {
    return <div>Post não encontrado.</div>;
  }

  const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-0 font-sans">
      <Nav />
      <div className="mt-16 px-4 max-w-4xl w-full">
        <h1 className="text-black text-left mt-20">{formattedDate}</h1>
        <h1 className="text-2xl text-black font-bold mt-6 text-center">{post.title}</h1>
        
        
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={800}
            className="align-middle mt-4 mx-auto"
          />
        )
        }
        <p className="text-black text-center mt-4 italic">{post.summary}</p>
        <article className="text-black text-justify mt-6">
        <footer className="text-black font-bold mt-6 text-left">
          <p>Por: {post.owner}</p>
        </footer>  
          <p className='mt-6'>{post.content}</p>
        </article>
        
      </div>

      <section className="w-full p-6 mt-12">
        <h2 className="text-black text-2xl font-bold mb-6">Posts Relacionados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((relatedPost) => (
            <Link
              key={relatedPost._id}
              href={`/contentpage/${relatedPost._id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <Image
                src={relatedPost.image}
                alt={relatedPost.title}
                className="w-full h-48 object-cover"
                width={500}
                height={500}
              />
              <div className="p-4">
                <h2 className="text-black text-md font-semibold">{relatedPost.title}</h2>
                <p className="text-gray-600 text-sm">{relatedPost.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

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
  const postQuery = `*[_type == "post" && _id == $id][0]{
    _id, 
    title, 
    summary,
    content,
    owner,
    date,
    "image": image.asset->url 
  }`;

  const relatedPostsQuery = `*[_type == "post" && _id != $id][0...3]{
    _id,
    title,
    summary,
    "image": image.asset->url
  }`;

  const post = await client.fetch(postQuery, { id: params?.id });
  const relatedPosts = await client.fetch(relatedPostsQuery, { id: params?.id });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      relatedPosts,
    },
    revalidate: 60,
  };
};

export default PostPage;
