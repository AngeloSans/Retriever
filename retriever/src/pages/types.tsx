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
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold">Ansiedade</h1>
                    <Nav />
                </div>
            </header>

            <main className="container mx-auto p-4">
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-center text-purple-600">Tipos de Ansiedade</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Social', 'Pânico', 'TOC', 'TDAH', 'Pânico', 'Pânico', 'Pânico'].map((type, index) => (
                            <button
                                key={index}
                                className={`p-4 rounded-full transition duration-300 ease-in-out ${
                                    selectedType === type ? 'bg-purple-600 text-white' : 'bg-gray-300 text-gray-700 hover:bg-purple-300'
                                }`}
                                onClick={() => handleTypeClick(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </section>

                <section>
                    {selectedType === 'Social' && (
                        <article className="mb-8">
                            <img src="/path/to/image1.jpg" alt="Transtorno de Ansiedade Social" className="w-full mb-4 rounded-lg shadow-md" />
                            <h3 className="text-xl font-semibold">Transtorno de Ansiedade Social: o que é, sintomas e tratamento</h3>
                            <p className="mt-2 text-gray-700">Descrição detalhada sobre o transtorno de ansiedade social.</p>
                        </article>
                    )}
                    {selectedType === 'Pânico' && (
                        <article className="mb-8">
                            <img src="/path/to/image2.jpg" alt="Ansiedade em Crianças" className="w-full mb-4 rounded-lg shadow-md" />
                            <h3 className="text-xl font-semibold">Entenda o que é ansiedade social e como se manifesta nas crianças</h3>
                            <p className="mt-2 text-gray-700">Descrição detalhada sobre a ansiedade em crianças.</p>
                        </article>
                    )}
                    {selectedType === 'TOC' && (
                        <article className="mb-8">
                            <img src="/path/to/image3.jpg" alt="Ansiedade e Fobia Social" className="w-full mb-4 rounded-lg shadow-md" />
                            <h3 className="text-xl font-semibold">Fobia social quando o sofrimento pela timidez é tanto que a saída é se esconder</h3>
                            <p className="mt-2 text-gray-700">Descrição detalhada sobre ansiedade e fobia social.</p>
                        </article>
                    )}

                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Types;
