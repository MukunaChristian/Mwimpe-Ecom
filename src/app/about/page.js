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
                            src="/home2.jpg"
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
                            We are an organic brand focused on giving you the best skin. Our aim is confidence, comfort in
                            your own skin, and the ability to embrace it. Our products are formulated with bio-active
                            ingredients that work on a cellular level, helping to slow down the aging process.
                            They protect your skin naturally without compromising your health. The name ‘Mwimpe’ originated
                            from a word in the Luba tribe. This name is inspired by the late Marie Bakaji, as it was one of
                            the most common words she used to compliment herself, seeing that
                            she was black, natural, organic, and beautiful. Mwimpe Beauty also specializes in
                            providing quality facial services and permanent makeup services, such as microshading and
                            lip neutralization. These services aim to boost your confidence and enhance your beauty to a
                            whole new level.
                        </p>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}