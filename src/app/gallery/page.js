'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const gallery = [
    {
        before: '/placeholder.svg?height=300&width=300',
        after: '/placeholder.svg?height=300&width=300',
        title: 'Facial Transformation'
    },
    {
        before: '/placeholder.svg?height=300&width=300',
        after: '/placeholder.svg?height=300&width=300',
        title: 'Skin Rejuvenation'
    },
    {
        before: '/placeholder.svg?height=300&width=300',
        after: '/placeholder.svg?height=300&width=300',
        title: 'Makeup Makeover'
    },
    {
        before: '/placeholder.svg?height=300&width=300',
        after: '/placeholder.svg?height=300&width=300',
        title: 'Body Treatment Results'
    },
]

export default function Gallery() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="bg-brown-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-3xl font-extrabold text-brown-900 sm:text-4xl">
                        Before & After Gallery
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        See the amazing transformations of our clients
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {gallery.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="relative overflow-hidden rounded-lg shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Image
                                src={hoveredIndex === index ? item.after : item.before}
                                alt={item.title}
                                width={300}
                                height={300}
                                className="w-full h-full object-cover transition-opacity duration-300"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-center font-bold">{item.title}</p>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 text-center py-2">
                                <p className="text-sm font-medium text-brown-800">
                                    {hoveredIndex === index ? 'After' : 'Before'}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}