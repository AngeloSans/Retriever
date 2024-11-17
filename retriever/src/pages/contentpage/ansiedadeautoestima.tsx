import { GetStaticProps } from 'next';
import Head from 'next/head';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import   Post  from ".././types";
import TopicCard from '../../components/TopicCard';
//import '../app/globals.css';
import React from 'react';
import Link from "next/link";
import {getAllPosts} from "../../../sanity/lib/sanity";

interface Post {
    _id: string;
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

const Ansiedade: React.FC<ExplorerProps> = ({ posts }) => {
    return (
        <main className="bg-white flex min-h-screen flex-col items-center justify-between p-0">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet"/>
                <title>Ansiedade e Autoestima</title>
            </Head>

            <div className="relative w-full bg-cover bg-center">
                <Nav />
            </div>

            <div className="container mx-auto p-4 mt-40 flex">
                
                <div className="flex-1 space-y-20">
                <h1 className="text-4xl font-bold mb-6 text-[#9A2AF3]">Ansiedade e Autoestima</h1>
                    {posts.map((post) => (
                        <TopicCard
                            key={post._id}
                            _id={post._id}
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
                            <li><Link href="#" className="text-sm hover:underline">Pandemia e Ansiedade</Link></li>
                            <li><Link href="/about" className="text-sm hover:underline">Jovens de 18 a 25 ansiedade</Link></li>
                        </ul>
                    </div>

                    <Link href={"/suport"}>
                        <div className="text-black font-semibold">
                        Precisa de Ajuda ?
                        </div>
                    </Link>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export async function getStaticProps() {
    return {
        props: {
            posts: await getAllPosts(),
        },
        revalidate: 60,
    };
}



export default Ansiedade;
