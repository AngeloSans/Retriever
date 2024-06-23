import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import PostForm from '../components/PostForm';
import RelatosSection from '../components/RelatosSection';

export default function Home() {
    return (
        <main className="bg-white flex flex-col min-h-screen items-center justify-between p-0">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
            </Head>
            <header className="w-full">
                <div
                    className="relative w-full h-screen bg-cover bg-center"
                    style={{ backgroundImage: "url('/ImagesRetriever/womanSad.png')", minHeight: "320px" }}
                >
                    <Nav />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-6">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            O que é Ansiedade?
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg">
                            A ansiedade é uma resposta natural do corpo a situações de perigo, estresse ou desafio. É uma reação adaptativa que nos prepara para lidar com ameaças percebidas. No entanto, em alguns casos, a ansiedade pode se tornar desproporcional, crônica e afetar negativamente a qualidade de vida.
                        </p>
                        <button className="mt-4 bg-purple-950 text-white px-6 py-3 rounded-full hover:bg-purple-900">
                            Saber Mais
                        </button>
                    </div>
                </div>
            </header>
            <section className="w-full p-6">
                <h1 className="text-black text-lg font-semibold">
                    Explorar
                </h1>
            </section>

            <section className="w-full p-6">
                <h1 className="text-black text-lg font-semibold">
                    Descubra os Tipos de Ansiedade
                </h1>
            </section>

            <section className="w-full p-6">
                <h1 className="text-black text-lg font-semibold mb-4">
                    Saiba Mais sobre Ansiedade!
                </h1>
                <div className="flex justify-center">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/Tv0gJTBmVuc"
                        title="Anxiety video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>

            <RelatosSection />

            <section className="w-full p-6">
                <h1 className="text-black text-lg font-semibold mb-4">
                    Crie uma Nova Postagem
                </h1>
                <PostForm />
            </section>

            <Footer/>
        </main>
    );
}
