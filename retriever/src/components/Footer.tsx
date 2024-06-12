import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 w-full width: 100%">
            <div className="container mx-auto px-4 flex justify-between w-full max-w-full">
                <div className="space-y-2">
                    <p className="text-sm">
                        Retriever é uma plataforma de informação e ajuda para pessoas com ansiedade, um lugar onde você possa se sentir seguro
                    </p>
                    <p className="text-sm">© 2024 Retriever</p>
                </div>
                <div className="flex space-x-8">
                    <div className="space-y-2">
                        <h6 className="font-bold">Retriever</h6>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-sm hover:underline">Contatos</a></li>
                            <li><a href="#" className="text-sm hover:underline">Sobre nós</a></li>
                            <li><a href="#" className="text-sm hover:underline">Ajuda</a></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h6 className="font-bold">Referências</h6>
                        <ul className="space-y-1">
                            <li><a href="#" className="text-sm hover:underline">Artigos</a></li>
                            <li><a href="#" className="text-sm hover:underline">Vídeos</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
