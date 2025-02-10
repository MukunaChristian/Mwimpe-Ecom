"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { gallery } from "@/data/servicesData"

export default function Gallery() {
    return (
        <div className="bg-brown-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-3xl font-extrabold text-brown-900 sm:text-4xl">Before & After Gallery</h1>
                    <p className="mt-4 text-xl text-gray-600">See the amazing transformations of our clients</p>
                </motion.div>

                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {gallery.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-brown-800 mb-2">{item.title}</h3>
                            </div>
                            <div className="flex flex-col sm:flex-row">
                                <div className="w-full sm:w-1/2 relative h-72">
                                    <Image
                                        src={item.before || "/placeholder.svg"}
                                        alt={`Before ${item.title}`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="object-cover"
                                        priority={index < 2}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 text-center py-2">
                                        <p className="text-sm font-medium text-brown-800">Before</p>
                                    </div>
                                </div>
                                <div className="w-full sm:w-1/2 relative h-72">
                                    <Image
                                        src={item.after || "/placeholder.svg"}
                                        alt={`After ${item.title}`}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="object-cover"
                                        priority={index < 2}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 text-center py-2">
                                        <p className="text-sm font-medium text-brown-800">After</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
