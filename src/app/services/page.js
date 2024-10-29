'use client'

import { motion } from 'framer-motion'

const services = [
    {
        title: 'Facial Treatments',
        description: 'Rejuvenate your skin with our customized facial treatments.',
        icon: '✨'
    },
    {
        title: 'Body Treatments',
        description: 'Indulge in our luxurious body treatments for total relaxation.',
        icon: '🧖‍♀️'
    },
    {
        title: 'Makeup Services',
        description: 'Look your best for any occasion with our professional makeup services.',
        icon: '💄'
    },
    {
        title: 'Skincare Consultation',
        description: 'Get personalized skincare advice from our experts.',
        icon: '👩‍⚕️'
    }
]

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

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="bg-white rounded-lg shadow-lg p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h2 className="text-xl font-bold text-brown-800 mb-2">{service.title}</h2>
                            <p className="text-gray-600">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}