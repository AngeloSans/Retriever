import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import '../app/globals.css';

export default function RetrieverAcademic() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        
        setResults([
            { title: "What is an anxiety disorder?", authors: "MG Craske, SL Rauch" },
            { title: "What is an anxiety disorder?", authors: "MG Craske, SL Rauch" },
            { title: "What is an anxiety disorder?", authors: "MG Craske, SL Rauch" }
        ]);
    };

    return (
        <>
            <main className="bg-white flex flex-col min-h-screen items-center justify-between p-0">
                <Head>
                    <title>Retriever Acadêmico</title>
                </Head>
                <div className="relative w-full bg-cover bg-center">
                    <Nav />
                </div>
                <h1 className="text-4xl mt-20 font-bold">Retriever Acadêmico</h1>
                <p className="text-black">Pesquise o seu material academico sobre ansiedade</p>
                <div className="search-container flex mt-1 w-full max-w-3xl mx-auto">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Digite aqui"
                        className="flex-grow p-2 text-black rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                    <button
                        onClick={handleSearch}
                        className="flex-shrink-0 px-6 py-2 bg-purple-600 text-white rounded-r-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                    >
                        Search
                    </button>
                </div>
                <div className="results mt-4 w-full max-w-3xl mx-auto">
                    {results.map((result, index) => (
                        <div key={index} className="result p-2 border-b border-gray-200">
                            <h2 className="text-xl font-semibold">{result.title}</h2>
                            <p className="text-gray-600">{result.authors}</p>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
