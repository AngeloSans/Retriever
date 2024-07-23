import React, { useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../app/globals.css';
import Link from "next/link";

export default function Suport() {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = ({index}: { index: any }) => {
        if (openItem === index) {
            setOpenItem(null);
        } else {
            setOpenItem(index);
        }
    };

    return (
        <main className="bg-white flex min-h-screen flex-col items-center justify-between p-0">
            <Head>
                <Link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" />
                <title>Suporte</title>
            </Head>
            <div className="relative w-full bg-cover bg-center">
                <Nav/>
            </div>

            <section className="w-full bg-purple-700 text-white py-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">Suporte</h1>
                </div>
            </section>

            <section className="w-full py-12">
                <div className="container mx-auto text-center">
                    <div className="grid grid-cols-2 gap-4 mb-12">
                        <button className="bg-gray-200 text-gray-800 font-bold py-4 rounded-lg">Como posso me ajudar</button>
                        <button className="bg-gray-200 text-gray-800 font-bold py-4 rounded-lg">Posso me ajudar?</button>
                        <button className="bg-gray-200 text-gray-800 font-bold py-4 rounded-lg">O Retriever é confiável?</button>
                        <button className="bg-gray-200 text-gray-800 font-bold py-4 rounded-lg">O Retriever é confiável?</button>
                    </div>
                </div>
            </section>

            <section className="w-full bg-purple-700 text-white py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Dúvidas frequentes</h2>
                    <ul className="space-y-4">
                        {[
                            "Artigos mais lidos",
                            "Gerenciar sua Conta do Google",
                            "Recuperação de conta",
                            "Segurança da conta",
                            "Privacidade da conta"
                        ].map((item, index) => (
                            <li key={index} className="bg-white p-4 rounded-lg shadow-sm">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleItem({index: index})}
                                >
                                    <span className="text-lg font-semibold text-black">{item}</span>
                                    <span className="text-black">{openItem === index ? '-' : '+'}</span>
                                </div>
                                {openItem === index && (
                                    <div className="mt-2 p-4 bg-gray-50 rounded-lg text-black">
                                        <p> {item.toLowerCase()}.</p>
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
                    <button className="bg-purple-700 text-white font-bold py-4 px-8 rounded-lg">Entrar em Contato</button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
