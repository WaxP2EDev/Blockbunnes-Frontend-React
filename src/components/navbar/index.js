import React, { useState } from 'react';

const Navbar = () => {
    const navbarStyle = {
        backgroundColor: '#18b8cb'
    }
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="relative h-[54px]">
            <nav className="bl-navbar h-full bg-gradient-to-r from-[#2bd8d9] to-[#0ba2c1]" style={navbarStyle}>
                <div className="max-w-7xl flex flex-col h-full mx-auto px-4 sm:px-6 lg:px-8 items-end sm:items-center">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <i className="fa fa-caret-right"></i>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-bold text-2xl uppercase"
                                    >
                                        Mining
                                    </a>
                                    <i className="fa fa-caret-left"></i>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-bold text-2xl uppercase"
                                    >
                                        Farming
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-bold text-2xl uppercase"
                                    >
                                        Battle
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-bold text-2xl uppercase"
                                    >
                                        Explore
                                    </a>

                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-bold text-2xl uppercase"
                                    >
                                        Craft
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-white px-3 py-2 rounded-md text-sm font-bold text-2xl uppercase"
                                    >
                                        Staking
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </section>
    );
}

export default Navbar;