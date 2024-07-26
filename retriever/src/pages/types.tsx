import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../app/globals.css';

const Types = () => {
    const [selectedType, setSelectedType] = useState<string | null>('Social');

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
                    <h2 className="text-4xl text-black text-center font-semibold mt-40">Ansiedade Classificada por Tipos</h2>
                    <h2 className="text-xl font-medium mb-4 text-center text-gray-800 mt-6">
                        Todo mundo já sentiu apreensão e ansiedade em algum momento da vida. Seja pela expectativa de uma prova, a apresentação de um projeto ou algum compromisso importante. Essa é a ansiedade comum do dia a dia, da qual tanto ouvimos falar. Mas você sabia que existem diferentes tipos de ansiedade?
                    </h2>

                    <div className="flex justify-center gap-4 border-b-2 border-gray-200 mb-6">
                        {['Social', 'Pânico', 'TOC', 'TDAH'].map((type, index) => (
                            <button
                                key={index}
                                className={`p-4 text-lg transition duration-300 font-semibold ease-in-out ${
                                    selectedType === type ? 'border-b-4 border-black text-black' : 'text-back hover:text-black'
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
                            <img src="/ImagesRetriever/ansiedadesocialtypes.jpg" alt="Transtorno de Ansiedade Social" className="max-w-md h-64 mx-auto mb-4 rounded-lg shadow-md object-cover" />
                            <h3 className="text-xl font-semibold text-black">Transtorno de Ansiedade Social: o que é, sintomas e tratamento</h3>
                            <p className="mt-2 text-black">Descrição detalhada sobre o transtorno de ansiedade social.</p>
                        </article>
                    )}
                    {selectedType === 'Pânico' && (
                        <article className="mb-8">
                            <img src="/ImagesRetriever/panicotypes.jpg" alt="Ansiedade em Crianças" className="max-w-md h-64 mx-auto mb-4 rounded-lg shadow-md object-cover" />
                            <h3 className="text-xl font-semibold text-black">Entenda o que é ansiedade social e como se manifesta nas crianças</h3>
                            <p className="mt-2 text-black">Descrição detalhada sobre a ansiedade em crianças.</p>
                        </article>
                    )}
                    {selectedType === 'TOC' && (
                        <article className="mb-8">
                            <img src="/ImagesRetriever/toctypes.jpg" alt="Ansiedade e Fobia Social" className="max-w-md h-64 mx-auto mb-4 rounded-lg shadow-md object-cover" />
                            <h3 className="text-xl text-black font-semibold">Fobia social quando o sofrimento pela timidez é tanto que a saída é se esconder</h3>
                            <p className="mt-2 text-gray-700">Descrição detalhada sobre ansiedade e fobia social.</p>
                        </article>
                    )}
                    {selectedType === 'TDAH' && (
                        <article className="mb-8">
                            <img src="/ImagesRetriever/tdahtypes.jpeg" alt="Ansiedade e Fobia Social" className="max-w-md h-64 mx-auto mb-4 rounded-lg shadow-md object-cover" />
                            <h3 className="text-xl text-black font-semibold">Fobia social quando o sofrimento pela timidez é tanto que a saída é se esconder</h3>
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
