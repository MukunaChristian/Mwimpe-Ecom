'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
    {
        name: 'Sarah Johnson',
        quote: 'The facial treatment I received was amazing! My skin has never looked better.',
        image: '/placeholder.svg?height=100&width=100'
    },
    {
        name: 'Mike Thompson',
        quote: 'I was skeptical at first, but the results speak for themselves. Highly recommended!',
        image: '/placeholder.svg?height=100&width=100'
    },
    {
        name: 'Emily Davis',
        quote: 'The staff is so knowledgeable and friendly. I always feel pampered when I visit.',
        image: '/placeholder.svg?height=100&width=100'
    },
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

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
                        What Our Clients Say
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Read testimonials from our satisfied clients
                    </p>
                </motion.div>

                <div className="mt-12 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
                        >
                            <div className="flex items-center mb-4">
                                <Image
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    width={60}
                                    height={60}
                                    className="rounded-full mr-4"
                                />
                                <h2 className="text-xl font-bold text-brown-800">{testimonials[currentIndex].name}</h2>
                            </div>
                            <p className="text-gray-600 italic">&quot;{testimonials[currentIndex].quote}&quot;</p>
                        </motion.div>
                    </AnimatePresence>
                    <button
                        onClick={prevTestimonial}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-brown-800"
                    >
                        ←
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-brown-800"
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    )
}