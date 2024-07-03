import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { useState } from 'react';
import '../app/globals.css';

export default function RetrieverAcademic() {  // Capitalized component name
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        // Mock search results
        setResults([
            { title: "What is an anxiety disorder?", authors: "MG Craske, SL Rauch" },
            { title: "What is an anxiety disorder?", authors: "MG Craske, SL Rauch" },
            { title: "What is an anxiety disorder?", authors: "MG Craske, SL Rauch" }
        ]);
    };

    return (
        <div className="bg-white flex min-h-screen flex-col items-center justify-between p-0">
            <Head>
                <title>Retriever Acadêmico</title>
            </Head>
            <Nav />
            <main className="main">
                <h1>Retriever Acadêmico</h1>
                <p>Pesquise o seu material academico sobre ansiedade</p>
                <div className="search-container">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Digite aqui"
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className="results">
                    {results.map((result, index) => (
                        <div key={index} className="result">
                            <h2>{result.title}</h2>
                            <p>{result.authors}</p>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
