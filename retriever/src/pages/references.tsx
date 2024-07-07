import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../app/globals.css';

export default function References() {
    return (
        <main className="bg-gray-100 flex min-h-screen flex-col items-center justify-between">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
                <title>Referências</title>
            </Head>

            <header className="bg-[#743F9E] text-white w-full py-6">
                <div className="container mx-auto px-4">
                    <Nav />
                </div>
            </header>

            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Referências</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Referência 1</h3>
                        <p className="text-gray-700">Descrição da referência 1.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Referência 2</h3>
                        <p className="text-gray-700">Descrição da referência 2.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Referência 3</h3>
                        <p className="text-gray-700">Descrição da referência 3.</p>
                    </div>
                    }
                </div>
            </section>

            <Footer />
        </main>
    );
}
