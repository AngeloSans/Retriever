import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../app/globals.css';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { getAllRelatos } from '../../sanity/lib/sanity';
import React from "react";
import Link from "next/link";
import Image from "next/image";

type Relato = {
    _id: string;
    user: string;
    instagram: string;
    message: string;
    date: string;
    photo: string;
};

export const getStaticProps: GetStaticProps<{ relatos: Relato[] }> = async () => {
    const relatos: Relato[] = await getAllRelatos();
    return {
        props: {
            relatos,
        },
        revalidate: 60,
    };
};

const Reports = ({ relatos }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <main className="bg-white flex min-h-screen flex-col items-center justify-between p-0 font-sans">
            <Head>
                <Link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet"/>
                <title>Relatos</title>
            </Head>

            <div className="relative w-full bg-cover bg-center">
                <Nav/>
            </div>

            <div className="text-center w-full px-4 mt-40">
                <h2 className="text-3xl font-bold text-purple-900 mb-8">Relatos de Experiências Pessoais</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16"> 
                    {relatos.map((relato) => (
                        <div
                            key={relato._id}
                            className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg"
                        >
                            <div className="flex items-center space-x-4">
                                <Image
                                    src={relato.photo}
                                    alt={relato.user}
                                    width={500}
                                     height={500}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{relato.user}</h3>
                                    <p className="text-sm text-gray-600">@{relato.instagram}</p>
                                    <p className="text-sm text-gray-600">{new Date(relato.date).toLocaleDateString()}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-gray-700 break-words">{relato.message}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer/> 
        </main>
    );
};

export default Reports;
