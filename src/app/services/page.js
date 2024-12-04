'use client'

import { motion } from 'framer-motion'
import { servicesData } from '@/data/servicesData'
import Image from 'next/image'

export default function Services() {
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
                        Our Services
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Discover our range of beauty and skincare services
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-brown-700 mb-2">{service.title}</h3>
                            <p className="text-gray-600">Experience the best in natural beauty care.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}