'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShoppingCart, X } from 'lucide-react'
import { useCart } from '../context/CartContext'


const products = [
    { id: 1, name: 'Turmeric soap', price: 60.00, image: '/tumerixsoap.webp', description: 'Benefits of turmeric soap: Prevents wrinkles Reduces inflammation and uneven skin pigmentation.Improves appearance of blemishes and scars Fades acne dark spots and discoloration Skin brightening Active ingredients: Turmeric, vitamin C, kojic acid.' },
    { id: 2, name: 'Ghana African black soap', price: 70.00, image: '/Ghana .webp', description: 'Suitable for all skin types Helps reduce blemishes Removes bacteria Deep cleanses the skin Exfoliates to improve skin texture and tone Reduces or prevented razor burns Helps with mild rash Treats fungus Reduces appearance of wrinkles and fine lines Treats dandruff Active ingredients: Cocoa butter, coconut oil, palm oil, leaves or bark, shea butter.' },
    { id: 3, name: 'Turmeric oil', price: 120.00, image: '/Turmeric .webp', description: 'Benefits: Cleanses, clarifies, smooths, calms and brightens skinBeneficial for both face and bodyEnhances natural radiance Generally supports skin health Clears dead cells, renews and repairs Moisturizes dryness to alleviate itchiness 50ml Ingredients: Shea butter, jojoba oil, rosehip oil, tamanu, coffee seed oil with kojic and sandalwood extract.' },
    { id: 4, name: 'Carrot oil', price: 120.00, image: '/Carrot.webp', description: 'Benefits: Moisturizes the skin and smoothens lines Regenerate cells Lightens dark rspots and hyperpigmentation of skin Helps protect the skin from free radical damage Heals dry, irritated and inflamed skin Acts as sunscreen prevents sun damage 50ml Active ingredients: Vitamin E, shea butter, infused carrot oil.' },
    { id: 5, name: 'Shea butter', price: 100.00, image: '/Shea butter.webp', description: '100% pure, organic, grade A, raw unrefined ivory shea butter. It repairs , renews and protects. It has anti aging properties. moisturizes and softens skin and hair. It’s rich in vitamins  A, D, E and F Full of antioxidants and essential fatty acids.' },
    { id: 6, name: 'Turmeric & kojic cream', price: 100.00, image: '/Turmeric & kojic.webp', description: 'Hydrates, soothes and nourishes the skin Enriched with antioxidants Both for face and body Brightens the skin Active ingredients: Aqua isopropyl myristate, coconut oil, cetearyl alcohol, grapeseed oil, phenoxyethanol, turmeric root extract, carrot oil, aloe Vera, benzoate.' },
    { id: 7, name: 'Turmeric cream & turmeric salve combo', price: 230.00, image: '/Turmeric cream & .webp', description: 'Minimizes rough and uneven patches Brightens dark spots Illuminates and moisturizes Active ingredients:Soya bean oil, shea butter oil, sunflower oil, olive oil, castor oil, coco caprylate, vitamin c, rosehip oil, tamanu oil, geranium oil and kojic acid.' },

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
                                    priority={true}
                                    className="transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-brown-800 mb-2">{product.name}</h2>
                                <p className="text-brown-600 text-lg mb-4">R{product.price.toFixed(2)}</p>
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
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-lg p-8 max-w-xl w-full max-h-[90vh] overflow-y-auto relative"
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
                                <p className="text-2xl text-brown-600 mb-4">R{selectedProduct.price.toFixed(2)}</p>
                                <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
                                <button
                                    onClick={() => handleAddToCart(selectedProduct)}
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
        // <div className="bg-brown-50 min-h-screen">
        //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        //         <h1 className="text-4xl font-extrabold text-brown-900 mb-8 text-center">Our Products</h1>
        //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        //             <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white p-6 rounded-lg shadow-md text-center">
        //                 <h2 className="text-2xl font-semibold text-brown-800 mb-4">Coming Soon!</h2>
        //                 <p className="text-lg text-brown-600">We are working on adding new products. Stay tuned!</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>

    )
}