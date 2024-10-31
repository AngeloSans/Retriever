import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { client } from '../../sanity/lib/sanity';
import '../app/globals.css';
import Link from 'next/link'; 

interface SearchResult {
  title: string;
  author: string;
  previous: string;
  url: string; 
}

export default function RetrieverAcademic() {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = async () => {
    if (query.trim() === '') return;

    try {
      const searchResults = await client.fetch(
        `*[_type == "retrieverAcademic" && title match $searchQuery]{
          title,
          author,
          previous,
          url
        }`,
        { searchQuery: `${query}*` }
      );

      setResults(searchResults);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
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
        <p className="text-black">Pesquise o seu material acadêmico sobre ansiedade</p>
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
          {results.length > 0 ? (
            results.map((result, index) => (
              <a key={index} href={result.url} target="_blank" rel="noopener noreferrer" className="result p-2 border-b border-gray-200 block">
                <h2 className="text-[#743F9E] text-xl font-semibold">{result.title}</h2>
                <p className="text-[#179703]">{result.author}</p>
                <p className="text-[#000000]">{result.previous}</p>
              </a>
            ))
          ) : (
            <p className="text-gray-500">Nenhum resultado encontrado</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
