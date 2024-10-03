import { GetStaticPaths, GetStaticProps } from 'next';
import { client } from '../../../sanity/lib/sanity'; 
import { useRouter } from 'next/router';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Image from "next/image";
import { useState } from 'react';

interface Post {
  _id: string;
  title: string;
  summary: string;
  image: string;
  likes: number; 
  content: string;
  owner: string;
}

interface PostPageProps {
  post: Post;
}

const PostPage = ({ post }: PostPageProps) => {
  const router = useRouter();
  const [likes, setLikes] = useState(post.likes || 0); 
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [email, setEmail] = useState('');

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleLike = async () => {
    const updatedLikes = likes + 1; 

    try {
      const updatedPost = await client.patch(post._id)
        .set({ likes: updatedLikes })
        .commit();

      setLikes(updatedPost.likes); 
    } catch (error) {
      console.error('Erro ao atualizar likes:', error);
    }
  };

  const openPopup = () => {
    setPopupVisible(true);
  };

  const handleEmailSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  
    if (email && /\S+@\S+\.\S+/.test(email)) {
      setPopupVisible(false);
      handleLike(); 
    } else {
      alert('Por favor, insira um e-mail válido.');
    }
  };

  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-0 font-sans">
      <Nav />
      <div className="mt-16">
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
        <h2 className="text-black">{likes} Likes</h2> 
        <h2 className="text-black">{post.owner}</h2>
        <p className="text-black text-center">{post.content}</p>
        <button onClick={openPopup} className="mt-4 bg-blue-500 text-white p-2 rounded-md">
          Like
        </button>

        {isPopupVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
            <div className="bg-white text-black p-4 rounded shadow-lg">
              <h3 className="text-lg font-bold mb-2">Digite seu e-mail para curtir</h3>
              <form onSubmit={handleEmailSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail"
                  className="border rounded p-2 mb-4 w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-black p-2 rounded-md"
                >
                  Enviar
                </button>
                <button
                  type="button"
                  onClick={() => setPopupVisible(false)}
                  className="bg-red-500 text-black p-2 rounded-md ml-2"
                >
                  Cancelar
                </button>
              </form>
            </div>
          </div>
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
    likes, 
    content,
    owner,
    "image": image.asset->url 
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
