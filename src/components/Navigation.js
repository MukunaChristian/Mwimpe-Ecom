'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/products', label: 'Products' },
]

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-brown-800">
                            Beauty & Skincare
                        </Link>
                    </div>
                    <div className="hidden sm:flex space-x-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-600 hover:text-brown-800 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div className="sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brown-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <motion.div
                className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block text-gray-600 hover:text-brown-800 px-3 py-2 rounded-md text-base font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </nav>
    )
}
