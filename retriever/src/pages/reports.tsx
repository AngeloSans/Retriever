import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import '../app/globals.css';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { getAllRelatos } from '../../sanity/lib/sanity';
import React from "react";
import Link from "next/link";

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
        <main className="bg-gray-100 flex min-h-screen flex-col items-center justify-between p-4 font-sans">
            <Head>
                <Link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet"/>
                <title>Relatos</title>
            </Head>

            <Nav />

            <div className="mt-16 w-full max-w-3xl px-4">
                <h2 className="text-3xl font-bold text-purple-900 mb-8">Relatos de Experiências Pessoais</h2>
                <div className="grid gap-8">
                    {relatos.map((relato) => (
                        <div key={relato._id} className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg">
                            <div className="flex items-center space-x-4">
                                <img src={relato.photo} alt={relato.user} className="w-16 h-16 rounded-full object-cover"/>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{relato.user}</h3>
                                    <p className="text-sm text-gray-600">@{relato.instagram}</p>
                                    <p className="text-sm text-gray-600">{new Date(relato.date).toLocaleDateString()}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-lg text-gray-700">{relato.message}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default Reports;
