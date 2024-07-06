import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#111111] text-white py-28 w-full width: 100% height: ">
            <div className="container mx-auto px-4 flex justify-between w-full max-w-full">
                <div className="space-y-2">
                    <p className="text-sm text-gray-400">
                        Retriever é uma plataforma de informação e ajuda para pessoas com ansiedade,<br/>
                        um lugar onde você possa se sentir seguro
                    </p>
                    <p className="text-sm text-gray-400">© 2024 Retriever</p>
                </div>
                <div className="flex space-x-8">
                    <div className="space-y-2">
                        <h6 className="font-bold">Retriever</h6>
                        <ul className="space-y-1 text-gray-400">
                            <li><a href="#" className="text-sm hover:underline">Contatos</a></li>
                            <li><Link href="/about" className="text-sm hover:underline">Sobre nós</Link></li>
                            <li><a href="#" className="text-sm hover:underline">Ajuda</a></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h6 className="font-bold">Referências</h6>
                        <ul className="space-y-1 text-gray-400">
                            <li><a href="#" className="text-sm hover:underline">Artigos</a></li>
                            <li><Link href="/references" className="text-sm hover:underline">Referências</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;