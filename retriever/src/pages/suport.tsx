import React, { useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../app/globals.css';
import Link from 'next/link';

export default function Suport() {
    const [openItem, setOpenItem] = useState<number | null>(null); // Tipagem explícita

    const toggleItem = (index: number) => {
        setOpenItem(openItem === index ? null : index);
    };

    const faqs = [
        {
            question: "Como tratar a Ansiedade?",
            answer: "Ansiedade pode ser tratada com terapia, medicamentos, e mudanças no estilo de vida, como exercícios e meditação."
        },
        {
            question: "Quem são mais afetados com a ansiedade?",
            answer: "Ansiedade pode afetar qualquer pessoa, mas jovens adultos e pessoas expostas a situações de alto estresse são mais vulneráveis."
        },
        {
            question: "Ansiedade tem cura?",
            answer: "Embora não tenha uma 'cura' definitiva, ansiedade pode ser gerenciada e tratada com sucesso."
        },
        {
            question: "Qual a relação entre ansiedade e depressão?",
            answer: "Ansiedade e depressão frequentemente coexistem, pois ambas compartilham sintomas e podem influenciar uma à outra."
        },
        {
            question: "Como posso saber se estou sofrendo de ansiedade?",
            answer: "Sintomas incluem preocupação excessiva, insônia, e tensão muscular. Consulte um profissional para diagnóstico."
        }
    ];

    return (
        <main className="bg-white flex min-h-screen flex-col items-center justify-between p-0">
            <Head>
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
                <title>Suporte e Dúvidas</title>
            </Head>

            <div className="relative w-full bg-cover bg-center">
                <Nav />
            </div>

            <section className="w-full bg-purple-700 mt-20 text-white py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-6">Como Podemos Te Ajudar?</h2>
                    <div className="grid grid-cols-2 mt-8 gap-4">
                        <Link href="/about" className="bg-white text-black font-bold py-3 rounded-full">
                            Sobre Nós
                        </Link>
                        <Link href="/retrieveracademic" className="bg-white text-black font-bold py-3 rounded-full">
                            Artigos Acadêmicos
                        </Link>
                        <Link href="/reports" className="bg-white text-black font-bold py-3 rounded-full">
                            Ver Relatos Pessoais
                        </Link>
                        <Link href="/types" className="bg-white text-black font-bold py-3 rounded-full">
                            Quais Os Tipos de Ansiedade?
                        </Link>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white text-black py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Dúvidas frequentes</h2>
                    <ul className="space-y-4">
                        {faqs.map((faq, index) => (
                            <li key={index} className="bg-white p-4 rounded-lg shadow-sm">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleItem(index)}
                                >
                                    <span className="text-lg font-semibold">{faq.question}</span>
                                    <span>{openItem === index ? '-' : '+'}</span>
                                </div>
                                {openItem === index && (
                                    <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="w-full py-12 bg-purple-950">
                <div className="container mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-6">Precisa de mais ajuda?</h3>
                    <p className="mb-6">Entre em contato diretamente conosco</p>
                    <button className="bg-purple-700 text-white font-bold py-4 px-8 rounded-lg">
                        Entrar em Contato
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
