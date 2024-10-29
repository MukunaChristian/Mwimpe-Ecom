import Image from 'next/image'
import Link from 'next/link'

const products = [
    {
        name: 'Hydrating Facial Serum',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Intensely hydrating serum for all skin types.',
        price: '$49.99'
    },
    {
        name: 'Gentle Cleansing Foam',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Soft, foaming cleanser for daily use.',
        price: '$24.99'
    },
    {
        name: 'Nourishing Night Cream',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Rich night cream for deep hydration.',
        price: '$39.99'
    },
    {
        name: 'Brightening Eye Gel',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Cooling gel to reduce puffiness and dark circles.',
        price: '$34.99'
    },
    {
        name: 'Exfoliating Face Scrub',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Gentle exfoliating scrub for smooth skin.',
        price: '$29.99'
    },
    {
        name: 'SPF 30 Daily Moisturizer',
        image: '/placeholder.svg?height=300&width=300',
        description: 'Lightweight moisturizer with sun protection.',
        price: '$27.99'
    }
]

export default function ProductsPage() {
    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-brown-600 mb-8 text-center">Our Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className="bg-brown-50 rounded-lg shadow-md p-6">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={300}
                                height={300}
                                className="rounded-lg mb-4 w-full"
                            />
                            <h2 className="text-2xl font-semibold text-brown-600 mb-2">{product.name}</h2>
                            <p className="text-brown-800 mb-4">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-medium text-brown-600">{product.price}</span>
                                <Link href="/cart" className="bg-brown-600 hover:bg-brown-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                                    Add to Cart
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}