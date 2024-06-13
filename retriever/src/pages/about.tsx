import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

export default function About() {
    return (
        <>
            <Head>
                <title>Sobre - Retriever</title>
                <meta name="description" content="Saiba mais sobre a Retriever, uma plataforma de informação e ajuda para pessoas com ansiedade." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Nav />
            <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold mt-6">
                    Sobre a Retriever
                </h1>
                <p className="mt-3 text-2xl">
                    A Retriever é uma plataforma dedicada a fornecer informações e suporte para pessoas que enfrentam ansiedade.
                </p>
                <div className="mt-6 text-lg leading-8">
                    <p>
                        Nossa missão é criar um ambiente seguro e acolhedor onde todos possam encontrar os recursos e o apoio que precisam.
                    </p>
                    <p className="mt-4">
                        Fundada em 2024, a Retriever se compromete a oferecer conteúdo de alta qualidade, incluindo artigos, vídeos e muito mais.
                    </p>
                </div>
            </main>
            <Footer />
        </>
    );
}
