'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/app/context/CartContext'
import Image from 'next/image'

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
    const [isCartOpen, setIsCartOpen] = useState(false)
    const { cart } = useCart()

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

    // Function to close the menu when a link is clicked
    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/Mwimpe-beauty-logo.webp"
                            alt="Mwimpe Beauty Logo"
                            width={100}
                            height={80}
                            className="w-auto h-12 sm:h-16"
                            priority
                        />
                    </Link>
                    <div className="hidden sm:flex sm:space-x-8">
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

                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <button
                                onClick={() => setIsCartOpen(!isCartOpen)}
                                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brown-500"
                            >
                                <ShoppingCart className="h-6 w-6" />
                                {totalItems > 0 && (
                                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </button>
                            {isCartOpen && (
                                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        {cart.length === 0 ? (
                                            <p className="block px-4 py-2 text-sm text-gray-700">Your cart is empty</p>
                                        ) : (
                                            <>
                                                {cart.map((item) => (
                                                    <div key={item.id} className="px-4 py-2 text-sm text-gray-700">
                                                        {item.name} x {item.quantity}
                                                    </div>
                                                ))}
                                                <Link href="/cart" className="block px-4 py-2 text-sm text-center text-brown-600 hover:bg-brown-100">
                                                    View Cart
                                                </Link>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="sm:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brown-500"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
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
                            onClick={closeMenu} // Close the menu when any link is clicked
                            className="text-gray-600 hover:text-brown-800 block px-3 py-2 rounded-md text-base font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </nav>
    )
}


