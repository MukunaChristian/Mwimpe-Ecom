'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
    {
        name: 'Pierriette MC',
        quote: 'Hello love, hope you are doing well. Thank you so much! Last night I used the scrub and applied the oil. This morning, I could already feel my skin is smooth. Thank you so much. I’ll definitely come back.'
    },
    {
        name: 'Rachele',
        quote: 'I’m so in love with the products! My favorite ones are the Turmeric oil and soap—they’re bringing a beautiful glow to my skin. I’m sure by month-end I’ll try out the glow combo too!'
    },
    {
        name: 'whois_liidy',
        quote: 'Highly recommend!'
    },
    {
        name: 'Gracia',
        quote: 'Hey there! Your products are magical. Within a week, I could feel and see the difference. Now that it has been a month, the change is so evident!'
    },
    {
        name: 'Yhori MC',
        quote: 'The oil is working perfectly on my face and neck. I love the results I’m seeing. Thank you!'
    },
    {
        name: 'Ulri',
        quote: 'Mwimpe Beauty is the best. They provide great service. I got my micro-shading ombre eyebrows done by them, and I love it!'
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div className="bg-brown-50 min-h-screen">
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
                            <h2 className="text-xl font-bold text-brown-800 mb-4 text-center">
                                {testimonials[currentIndex].name}
                            </h2>
                            <p className="text-gray-600 italic text-center">
                                &quot;{testimonials[currentIndex].quote}&quot;
                            </p>
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
