import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../app/globals.css';
import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
    return (
        <main className="bg-white flex min-h-screen flex-col items-center justify-between p-0 font-sans">
            <Head>
                <title>Sobre Retriever</title>
            </Head>

            <div className="relative w-full bg-cover bg-center">
                <Nav />
            </div>

            <div className="flex-grow flex flex-col items-center mt-16 px-4 md:px-8 lg:px-16 py-8 md:py-16">
                <h1 className="text-3xl md:text-5xl font-bold text-purple-900 mb-8">Sobre nós</h1>
                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl">
                    <Image className="w-full md:w-1/2 h-auto rounded-md shadow-lg" src="/ImagesRetriever/About.jpg" alt="About Us" />
                    <div className="md:ml-8 mt-8 md:mt-0 text-lg text-black space-y-4">
                        <h1 className="text-4xl font-bold">Aquilo que você disse sem nem pensar, eu passei dias pensando.</h1>
                        <p>
                            Retriever é um portal dedicado a trazer informações e apoio a pessoas que sofrem de ansiedade. Nosso objetivo é fornecer notícias, divulgar os diferentes tipos de ansiedade e compartilhar relatos de experiências pessoais.
                        </p>
                        <p>
                            Além disso, incentivamos práticas de autocuidado e desenvolvimento pessoal para gerenciar a ansiedade de maneira saudável. Lembre-se, é sempre importante buscar ajuda de um profissional qualificado para um suporte adequado.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default About;
