import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../app/globals.css';
import Link from "next/link";
import Image from "next/image";

const Types = () => {
    const [selectedType, setSelectedType] = useState<string | null>('Transtorno do Pânico');

    const handleTypeClick = (type: string) => {
        setSelectedType(type);
    };

    return (
        <div className="min-h-screen bg-white">
            <Head>
                <title>Tipos de Ansiedade</title>
            </Head>

            <header className="bg-black p-4 text-white">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-bold">Ansiedade</h1>
                    <Nav />
                </div>
            </header>

            <main className="container mx-auto p-4 mb-16">
                <section className="mb-8 text-center">
                    <h2 className="text-4xl text-black font-semibold mt-40">Ansiedade Classificada por Tipos</h2>
                    <h2 className="text-xl font-medium mb-4 text-gray-800 mt-6">
                        Todo mundo já sentiu apreensão e ansiedade em algum momento da vida. Seja pela expectativa de uma prova, a apresentação de um projeto ou algum compromisso importante. Essa é a ansiedade comum do dia a dia, da qual tanto ouvimos falar. Mas você sabia que existem diferentes tipos de ansiedade?
                    </h2>

                    <div className="flex justify-center gap-4 border-b-2 border-gray-200 mb-6">
                        {['Transtorno do Pânico', 'Agorafobia', 'Fobias Específicas', 'Fobia Social', 'Ansiedade Generalizada'].map((type, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 text-lg rounded-full transition duration-300 font-semibold ease-in-out ${
                                    selectedType === type ? 'border-b-4 border-black text-black' : 'bg-[#9A2AF3] text-white hover:bg-[#7A1BB0]'
                                }`}
                                onClick={() => handleTypeClick(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </section>

                <section className="grid grid-cols-1 gap-4">
                    {selectedType === 'Transtorno do Pânico' && (
                        <article className="overflow-hidden max-w-md mx-auto">
                            <Image 
                                src="/ImagesRetriever/panicotypes.jpg"
                                alt="Transtorno do Pânico"
                                width={500}
                                height={500}
                                className="w-full h-64 object-cover mb-4"
                            />
                            <div className="px-4">
                                <h3 className="text-xl font-semibold text-black mb-2">Transtorno do Pânico</h3>
                                <ul className="list-disc pl-5 text-gray-700">
                                    <li>Caracterizado por crises de medo intensas e súbitas.</li>
                                    <li>Possíveis causas incluem estresse extremo e predisposição genética.</li>
                                    <li>Sintomas físicos como taquicardia, tontura e falta de ar.</li>
                                    <li>Causa sofrimento psíquico significativo.</li>
                                </ul>
                            </div>
                        </article>
                    )}
                    {selectedType === 'Agorafobia' && (
                        <Link href="/about">
                            <article className="bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto">
                                <Image 
                                    src="/ImagesRetriever/agorafobiatypes.jpg"
                                    alt="Agorafobia"
                                    width={500}
                                    height={500}
                                    className="w-full h-64 object-cover mb-4"
                                />
                                <div className="px-4">
                                    <h3 className="text-xl font-semibold text-black mb-2">Agorafobia</h3>
                                    <ul className="list-disc pl-5 text-gray-700">
                                        <li>Medo intenso de situações onde escapar pode ser difícil.</li>
                                        <li>Evita locais como transporte público ou multidões.</li>
                                        <li>Geralmente associado ao transtorno do pânico.</li>
                                    </ul>
                                </div>
                            </article>
                        </Link>
                    )}
                    {selectedType === 'Fobias Específicas' && (
                        <Link href="/about">
                            <article className="bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto">
                                <Image 
                                    src="/ImagesRetriever/fobiatypes.jpg"
                                    alt="Fobias Específicas"
                                    width={500}
                                    height={500}
                                    className="w-full h-64 object-cover mb-4"
                                />
                                <div className="px-4">
                                    <h3 className="text-xl font-semibold text-black mb-2">Fobias Específicas</h3>
                                    <ul className="list-disc pl-5 text-gray-700">
                                        <li>Medo excessivo de objetos ou situações específicas.</li>
                                        <li>Exemplos incluem medo de altura, animais ou sangue.</li>
                                        <li>Impacta a qualidade de vida e as atividades diárias.</li>
                                    </ul>
                                </div>
                            </article>
                        </Link>
                    )}
                    {selectedType === 'Fobia Social' && (
                        <Link href="/about">
                            <article className="bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto">
                                <Image 
                                    src="/ImagesRetriever/socialtypes.jpg"
                                    alt="Fobia Social"
                                    width={500}
                                    height={500}
                                    className="w-full h-64 object-cover mb-4"
                                />
                                <div className="px-4">
                                    <h3 className="text-xl font-semibold text-black mb-2">Fobia Social</h3>
                                    <ul className="list-disc pl-5 text-gray-700">
                                        <li>Medo intenso e persistente de situações sociais.</li>
                                        <li>Pessoas têm receio de julgamento ou rejeição.</li>
                                        <li>Afeta a vida pessoal, acadêmica e profissional.</li>
                                    </ul>
                                </div>
                            </article>
                        </Link>
                    )}
                    {selectedType === 'Ansiedade Generalizada' && (
                        <Link href="/about">
                            <article className="bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto">
                                <Image 
                                    src="/ImagesRetriever/generalizedtypes.jpg"
                                    alt="Ansiedade Generalizada"
                                    width={500}
                                    height={500}
                                    className="w-full h-64 object-cover mb-4"
                                />
                                <div className="px-4">
                                    <h3 className="text-xl font-semibold text-black mb-2">Ansiedade Generalizada</h3>
                                    <ul className="list-disc pl-5 text-gray-700">
                                        <li>Preocupação excessiva com diversas áreas da vida.</li>
                                        <li>Sintomas incluem tensão muscular, fadiga e insônia.</li>
                                        <li>Pode interferir no funcionamento diário.</li>
                                    </ul>
                                </div>
                            </article>
                        </Link>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Types;
