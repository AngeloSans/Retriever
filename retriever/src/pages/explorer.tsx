import { GetStaticProps } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import TopicCard from '../components/TopicCard';
import { getAllPosts } from '../../sanity/lib/sanity';
import '../app/globals.css';
import Link from "next/link";
import React from "react";

interface Post {
    title: string;
    summary: string;
    date: string;
    likes: number;
    image: string;
    owner: string;
    type: string;
}

interface ExplorerProps {
    posts: Post[];
}

const Explorer: React.FC<ExplorerProps> = ({ posts }) => {
    return (
        <main className="bg-white flex min-h-screen flex-col items-center justify-between p-0">
            <Head>
                <Link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet"/>
            </Head>
            <title>Explorar topicos</title>

            <div className="relative w-full bg-cover bg-center">
                <Nav/>

            </div>

            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-6">Explore Topics</h1>
                <div className="space-y-6">
                    {posts.map((post, index) => (
                        <TopicCard
                            key={index}
                            title={post.title}
                            summary={post.summary}
                            date={post.date}
                            likes={post.likes}
                            image={post.image}
                            owner={post.owner}
                            type={post.type}
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </main>
    );
};

export const getStaticProps: GetStaticProps<ExplorerProps> = async () => {
    const posts: Post[] = await getAllPosts();
    return {
        props: {
            posts,
        },
        revalidate: 60,
    };
};

export default Explorer;
