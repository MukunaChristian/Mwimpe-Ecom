'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="bg-brown-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-extrabold text-brown-900 sm:text-5xl md:text-6xl">
              <span className="block">Embrace Your</span>
              <span className="block text-brown-600">Natural Beauty</span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl md:max-w-2xl md:mx-0">
              Discover the power of nature-inspired skincare and beauty treatments tailored just for you.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center md:justify-start">
              <div className="rounded-md shadow">
                <Link href="/services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brown-600 hover:bg-brown-700 md:py-4 md:text-lg md:px-10">
                  Our Services
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link href="/products" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brown-700 bg-brown-100 hover:bg-brown-200 md:py-4 md:text-lg md:px-10">
                  Shop Products
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-64 sm:h-72 md:h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Beauty treatment"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center text-brown-800 mb-8">Our Featured Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Facial Treatments', icon: '✨' },
              { title: 'Body Treatments', icon: '🧖‍♀️' },
              { title: 'Natural Skincare', icon: '🌿' },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-brown-700 mb-2">{service.title}</h3>
                <p className="text-gray-600">Experience the best in natural beauty care.</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}