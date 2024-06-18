import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../app/globals.css';

export default function About() {
    return (
        <main className="bg-white flex min-h-screen flex-col items-center justify-between p-0">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
            </Head>

            <div className="relative w-full h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/ImagesRetriever/backgrounddog.png')" }}>
                <Nav />
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="text-3xl font-bold mt-24 text-white">Nós tentamos fazer da ansiedade um assunto a ser falado</h1>
                </div>
            </div>

            <div className="flex-grow flex flex-col items-center mt-16 h-full">
                <h1 className="text-3xl font-bold text-purple-900 mb-8">Sobre nós</h1>
                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-1xl px-2">
                    <img className="w-full md:w-1/2 h-auto" src="/ImagesRetriever/About.jpg" alt="About Us"/>
                    <p className="md:ml-8 mt-8 md:mt-0 text-lg text-black">
                        Retriever é um portal dedicado a trazer informações e apoio a pessoas que sofrem de ansiedade. Nosso objetivo é fornecer notícias, divulgar os diferentes tipos de ansiedade e compartilhar relatos de experiências pessoais. Além disso, incentivamos práticas de autocuidado e desenvolvimento pessoal para gerenciar a ansiedade de maneira saudável. Lembre-se, é sempre importante buscar ajuda de um profissional qualificado para um suporte adequado.
                    </p>
                </div>
            </div>

            <div className="mb-16"></div>

            <Footer />
        </main>
    );
}
