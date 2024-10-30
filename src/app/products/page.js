'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingCart, X } from 'lucide-react'
import { useCart } from '../context/CartContext'

const products = [
    { id: 1, name: 'Natural Face Cream', price: 29.99, image: '/placeholder.svg?height=400&width=400', description: 'A nourishing face cream made with all-natural ingredients to hydrate and rejuvenate your skin.' },
    { id: 2, name: 'Organic Lip Balm', price: 9.99, image: '/placeholder.svg?height=400&width=400', description: 'Keep your lips soft and moisturized with our organic lip balm, infused with natural oils and vitamins.' },
    { id: 3, name: 'Revitalizing Serum', price: 39.99, image: '/placeholder.svg?height=400&width=400', description: 'Boost your skin\'s radiance with our revitalizing serum, packed with antioxidants and essential nutrients.' },
    { id: 4, name: 'Gentle Cleansing Foam', price: 19.99, image: '/placeholder.svg?height=400&width=400', description: 'A gentle, foaming cleanser suitable for all skin types, leaving your skin clean and refreshed.' },
    { id: 5, name: 'Anti-Aging Night Cream', price: 49.99, image: '/placeholder.svg?height=400&width=400', description: 'Combat signs of aging with our powerful night cream, working while you sleep for younger-looking skin.' },
    { id: 6, name: 'Hydrating Toner', price: 24.99, image: '/placeholder.svg?height=400&width=400', description: 'Balance and hydrate your skin with our alcohol-free toner, enriched with natural botanicals.' },
]

export default function ProductsPage() {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const { addToCart } = useCart()

    const handleAddToCart = (product) => {
        addToCart(product)
        // alert(`${product.name} added to cart!`)
    }

    return (
        <div className="bg-brown-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-extrabold text-brown-900 mb-8 text-center">Our Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                        >
                            <div className="relative h-64">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-brown-800 mb-2">{product.name}</h2>
                                <p className="text-brown-600 text-lg mb-4">${product.price.toFixed(2)}</p>
                                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={() => setSelectedProduct(product)}
                                        className="px-4 py-2 bg-brown-100 text-brown-800 rounded-full hover:bg-brown-200 transition-colors focus:outline-none focus:ring-2 focus:ring-brown-300"
                                    >
                                        View Details
                                    </button>
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="px-4 py-2 bg-brown-600 text-white rounded-full hover:bg-brown-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brown-500 flex items-center"
                                    >
                                        <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-lg p-8 max-w-2xl w-full relative"
                    >
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <X className="h-6 w-6" />
                        </button>
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2 mb-4 md:mb-0 md:mr-6">
                                <Image
                                    src={selectedProduct.image}
                                    alt={selectedProduct.name}
                                    width={400}
                                    height={400}
                                    className="rounded-lg object-cover w-full h-full"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="text-3xl font-bold text-brown-800 mb-4">{selectedProduct.name}</h2>
                                <p className="text-2xl text-brown-600 mb-4">${selectedProduct.price.toFixed(2)}</p>
                                <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
                                <button
                                    onClick={() => {

                                        handleAddToCart(selectedProduct)
                                        setSelectedProduct(null)
                                    }}
                                    className="w-full px-6 py-3 bg-brown-600 text-white rounded-full hover:bg-brown-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brown-500 flex items-center justify-center"
                                >
                                    <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    )
}