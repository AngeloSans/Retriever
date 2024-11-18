import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { client } from '../../sanity/lib/sanity';
import '../app/globals.css';

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
    if (!query.trim()) return;

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
      <Head>
        <title>Retriever Acadêmico</title>
      </Head>
      <div className="bg-white flex flex-col min-h-screen">
        <div className="sticky top-0 z-50 bg-white shadow-md">
          <Nav />
        </div>

        <div className="flex flex-col mt-20 items-center py-6 bg-white">
          <h1 className="text-4xl mt-20 font-bold mb-2 text-purple-700">Retriever Acadêmico</h1>
          <p className="text-gray-700 mb-4 font-bold text-center">
            Pesquise o seu material academico sobre ansiedade
          </p>


          <div className="flex items-center w-full max-w-3xl">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Digite palavras-chave, como autores ou temas"
              className="flex-grow p-4 text-black rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent h-12"
            />
            <button
              onClick={handleSearch}
              className="px-6 py-2 bg-purple-600 text-white rounded-r-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 h-12"
            >
              Buscar
            </button>
          </div>
        </div>

        <div className="mt-6 w-full max-w-3xl mx-auto px-4">
          {results.length > 0 ? (
            results.map((result, index) => (
              <a
                key={index}
                href={result.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border-b border-gray-200 hover:bg-gray-50"
              >
                <h2 className="text-purple-600 text-lg font-semibold">{result.title}</h2>
                <p className="text-green-700">Autor: {result.author}</p>
                <p className="text-gray-700">Descrição: {result.previous}</p>
              </a>
            ))
          ) : (
            <p className="text-gray-500 text-center">
              Nenhum material encontrado. Tente outra palavra-chave ou refine sua busca.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
