import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../app/globals.css';

const Types = () => {
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const handleTypeClick = (type: string) => {
        setSelectedType(type);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Tipos de Ansiedade</title>
            </Head>

            <header className="bg-purple-600 p-4 text-white">
                <h1 className="text-2xl">Ansiedade</h1>
                <Nav />
            </header>

            <main className="p-4">
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Tipos de Ansiedade</h2>
                    <div className="flex flex-wrap gap-2">
                        {['Social', 'Pânico', 'TOC', 'TDAH', 'Pânico', 'Pânico', 'Pânico'].map((type, index) => (
                            <button
                                key={index}
                                className={`p-2 rounded ${selectedType === type ? 'bg-purple-600 text-white' : 'bg-gray-300'}`}
                                onClick={() => handleTypeClick(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </section>

                <section>
                    {selectedType === 'Social' && (
                        <article className="mb-4">
                            <img src="/path/to/image1.jpg" alt="Transtorno de Ansiedade Social" className="w-full mb-2" />
                            <h3 className="font-semibold">Transtorno de Ansiedade Social: o que é, sintomas e tratamento</h3>
                        </article>
                    )}
                    {selectedType === 'Pânico' && (
                        <article className="mb-4">
                            <img src="/path/to/image2.jpg" alt="Ansiedade em Crianças" className="w-full mb-2" />
                            <h3 className="font-semibold">Entenda o que é ansiedade social e como se manifesta nas crianças</h3>
                        </article>
                    )}
                    {selectedType === 'TOC' && (
                        <article className="mb-4">
                            <img src="/path/to/image3.jpg" alt="Ansiedade e Fobia Social" className="w-full mb-2" />
                            <h3 className="font-semibold">Fobia social quando o sofrimento pela timidez é tanto que a saída é se esconder</h3>
                        </article>
                    )}

                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Types;
