import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts, getPostById } from '../../sanity/lib/sanity';
import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import React from 'react';

interface Post {
    id: string;
    title: string;
    summary: string;
    content: string;
    date: string;
    likes: number;
    image: string;
    owner: string;
    type: string;
}

interface ContentPageProps {
    post: Post;
}

const ContentPage: React.FC<ContentPageProps> = ({ post }) => {
    return (
        <main className="bg-white flex min-h-screen flex-col items-center p-0">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
                <title>{post.title}</title>
            </Head>

            <div className="relative w-full bg-cover bg-center">
                <Nav />
            </div>

            <div className="container mx-auto p-4 mt-40">
                <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
                <img src={post.image} alt={post.title} className="w-full h-60 object-cover rounded-md mb-6" />
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-700">{post.content}</p>
                <p className="mt-4 text-gray-700">{post.likes.toLocaleString()} likes</p>
                <p className="mt-2 text-gray-700">Owner: {post.owner}</p>
                <p className="mt-2 text-gray-700">Type: {post.type}</p>
            </div>

            <Footer />
        </main>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPosts();
    const paths = posts.map((post) => ({
        params: { id: post.id },
    }));

    return {
        paths,
        fallback: 'blocking', // Or true, depending on your use case
    };
};

export const getStaticProps: GetStaticProps<ContentPageProps> = async ({ params }) => {
    const { id } = params as { id: string };
    const post = await getPostById(id);

    if (!post) {
        return { notFound: true };
    }

    return {
        props: {
            post,
        },
        revalidate: 60,
    };
};

export default ContentPage;
