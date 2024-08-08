import { GetStaticProps } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import TopicCard from '../components/TopicCard';
import { getAllPosts } from '../../sanity/lib/sanity';
import '../app/globals.css';
import React from 'react';
import Link from "next/link";

interface Post {
    id: string;
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
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet"/>
                <title>Explorar tópicos</title>
            </Head>

            <div className="relative w-full bg-cover bg-center">
                <Nav />
            </div>

            <div className="container mx-auto p-4 mt-40 flex">
                {/* Coluna dos Cards */}
                <div className="flex-1 space-y-20">
                    <h1 className="text-4xl font-bold mb-6">Explorar</h1>
                    {posts.map((post) => (
                        <TopicCard
                            key={post.id}
                            id={post.id}
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

                
                <div className="w-1/4 p-4 space-y-6 ml-8">
                    <div>
                        <div className="text-black font-semibold">
                            Artigos e Referências
                        </div>
                        <ul className="space-y-1 text-gray-400">
                            <li><a href="#" className="text-sm hover:underline">Contatos</a></li>
                            <li><Link href="/about" className="text-sm hover:underline">Sobre nós</Link></li>
                            <li><Link href="/suport" className="text-sm hover:underline">Ajuda</Link></li>
                        </ul>
                    </div>

                    <div>
                        <div className="text-black font-semibold">
                            Sei lá
                        </div>
                        <ul className="space-y-1 text-gray-400">
                            <li><a href="#" className="text-sm hover:underline">Contatos</a></li>
                            <li><Link href="/about" className="text-sm hover:underline">Sobre nós</Link></li>
                            <li><Link href="/suport" className="text-sm hover:underline">Ajuda</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
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
