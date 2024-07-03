import React, { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="absolute top-5 left-5 w-full flex justify-between items-center p-4 ">
            <div className="block md:hidden">
                <button
                    className="text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
            <ul
                className={`${
                    isOpen ? 'block' : 'hidden'
                } md:flex md:items-center list-none NavList`}
            >
                <li className="ml-5"><Link href="/" className="text-white text-sm font-semibold capitalize hover:text-purple-900">HOME</Link></li>
                <li className="ml-5"><Link href="#" className="text-white text-sm font-semibold capitalize hover:text-purple-900">EXPLORAR</Link></li>
                <li className="ml-5"><Link href="/types" className="text-white text-sm font-semibold capitalize hover:text-purple-900">Tipos</Link></li>
                <li className="ml-5"><Link href="/references" className="text-white text-sm font-semibold capitalize hover:text-purple-900">Relatos</Link></li>
                <li className="ml-5"><Link href="/about" className="text-white text-sm font-semibold capitalize hover:text-purple-900">About</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
