'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutUs() {
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
                        About Us
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Dedicated to enhancing your natural beauty
                    </p>
                </motion.div>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Image
                            src="/placeholder.svg?height=400&width=600"
                            alt="Our team"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="text-2xl font-bold text-brown-800 mb-4">Our Story</h2>
                        <p className="text-gray-600 mb-4">
                            Founded in 2010, Beauty & Skincare has been at the forefront of natural and effective skincare solutions. Our passion for beauty and commitment to using only the finest natural ingredients sets us apart in the industry.
                        </p>
                        <p className="text-gray-600">
                            We believe that everyone deserves to feel confident and beautiful in their own skin. Our team of expert estheticians and skincare specialists work tirelessly to provide personalized treatments and advice to help you achieve your beauty goals.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}