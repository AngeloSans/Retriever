import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

export default function Home() {
    return (
        <main className="bg-white flex min-h-screen flex-col items-center justify-between p-0">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
            </Head>
            <header className="w-full">
                <div
                    className="relative w-full h-96 bg-cover bg-center"
                    style={{ backgroundImage: "url('/ImagesRetriever/womanSad.png')" }}
                >
                    <Nav />
                    <div className="absolute bottom-4 left-4">
                        <button className="bg-purple-950 text-white px-6 py-3 rounded-full">
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
                <h1 className="text-black text-lg font-semibold">
                    Relatos Inspiradores
                </h1>
            </section>

            <section className="w-full p-6 relative">
                <h1 className="text-black text-lg font-semibold">
                    Relatos Inspiradores
                </h1>
                <div className="absolute bottom-4 left-4">
                    <button className="bg-purple-950 text-white px-6 py-3 rounded-full">
                        Compartilhar
                    </button>
                </div>
            </section>
            <Footer />
        </main>
    );
}
