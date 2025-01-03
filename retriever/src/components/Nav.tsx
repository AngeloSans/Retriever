import React, { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#a538ff] top-0 left-0 w-full z-10 fixed py-5 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">

                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="text-white text-sm font-semibold capitalize hover:text-purple-900">Home</Link>
                            <Link href="/explorer" className="text-white text-sm font-semibold capitalize hover:text-purple-900">Explorar</Link>
                            <Link href="/types" className="text-white text-sm font-semibold capitalize hover:text-purple-900">Tipos</Link>
                            <Link href="/reports" className="text-white text-sm font-semibold capitalize hover:text-purple-900">Relatos</Link>
                            <Link href="/about" className="text-white text-sm font-semibold capitalize hover:text-purple-900">Sobre Nós</Link>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-600 focus:outline-none focus:bg-purple-950 focus:text-white">
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700">HOME</Link>
                        <Link href="/explorer" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700">EXPLORAR</Link>
                        <Link href="/types" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700">Tipos</Link>
                        <Link href="/reports" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700">Relatos</Link>
                        <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-gray-700">About</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;
