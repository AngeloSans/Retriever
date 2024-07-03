import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#111111] text-white py-12 w-full">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-8 md:mb-0 md:w-1/2 space-y-4">
                    <p className="text-sm">
                        Retriever é uma plataforma de informação e ajuda para pessoas com ansiedade,<br />
                        um lugar onde você possa se sentir seguro.
                    </p>
                    <p className="text-sm">© 2024 Retriever</p>
                </div>
                <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 md:w-1/2">
                    <div className="space-y-4">
                        <h6 className="font-bold">Retriever</h6>
                        <ul className="space-y-2">
                            <li><Link href="/contact" className="text-sm hover:underline">Contatos</Link></li>
                            <li><Link href="/about" className="text-sm hover:underline">Sobre nós</Link></li>
                            <li><Link href="/suport" className="text-sm hover:underline">Ajuda</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h6 className="font-bold">Referências</h6>
                        <ul className="space-y-2">
                            <li><Link href="/retrieveracademic" className="text-sm hover:underline">Artigos</Link></li>
                            <li><Link href="/references" className="text-sm hover:underline">Referências</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
