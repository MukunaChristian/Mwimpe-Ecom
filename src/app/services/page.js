'use client'

import { useState, useEffect } from 'react'
import { servicesData } from '@/data/servicesData'
import Image from 'next/image'

export default function Services() {
    const [selectedService, setSelectedService] = useState(null);
    const [imageErrors, setImageErrors] = useState({});
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        service: ''
    });

    const closeModal = () => {
        setSelectedService(null);
        setIsBookingModalOpen(false);
    };

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    const handleImageError = (index) => {
        setImageErrors(prev => ({ ...prev, [index]: true }));
    };

    const openBookingModal = (service) => {
        setBookingDetails(prev => ({ ...prev, service: service.title }));
        setIsBookingModalOpen(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleBooking = () => {
        const { name, phone, date, time, service } = bookingDetails;

        // Create the message to be sent on WhatsApp
        const message = `*Booking Details:*\n\n*Service*: ${service}\n*Name*: ${name}\n*Phone*: ${phone}\n*Date*: ${date}\n*Time*: ${time}`;

        // Construct the WhatsApp URL with the encoded message
        const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp chat in a new tab with the message
        window.open(whatsappUrl, '_blank');
    };

    const generateTimeOptions = () => {
        const options = [];
        for (let hour = 9; hour <= 17; hour++) {
            options.push(`${hour}:00`);
            if (hour !== 19) options.push(`${hour}:30`);
        }
        return options;
    };

    return (
        <div className="bg-brown-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-brown-900 sm:text-4xl">
                        Our Services
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Discover our range of beauty and wellness services
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-8">
                    {servicesData.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                                {!imageErrors[index] ? (
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover rounded-lg"
                                        priority={index < 3}
                                        onError={() => handleImageError(index)}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                                        Image not available
                                    </div>
                                )}
                            </div>
                            <h3 className="text-xl font-semibold text-brown-700 mb-2">{service.title}</h3>
                            <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                            <div className="flex justify-between">
                                <button
                                    onClick={() => setSelectedService(service)}
                                    className="bg-transparent hover:bg-brown-700 text-brown-700 font-semibold hover:text-white py-2 px-4 border border-brown-700 hover:border-transparent rounded"
                                >
                                    Learn More
                                </button>
                                <button
                                    onClick={() => openBookingModal(service)}
                                    className="bg-brown-700 hover:bg-brown-800 text-white font-bold py-2 px-4 rounded"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedService && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative" role="dialog" aria-labelledby="service-modal-title">
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 text-black hover:text-black text-4xl p-3  rounded-full hover:bg-brown-700 transition duration-300 ease-in-out"
                                aria-label="Close Modal"
                            >
                                ×
                            </button>

                            <h2 id="service-modal-title" className="text-2xl font-bold text-brown-700 mb-4">
                                {selectedService.title}
                            </h2>
                            <p className="text-gray-600">{selectedService.longDescription}</p>
                        </div>
                    </div>
                )}

                {isBookingModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative" role="dialog" aria-labelledby="booking-modal-title">
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 text-black hover:text-black text-4xl p-3  rounded-full hover:bg-brown-700 transition duration-300 ease-in-out"
                                aria-label="Close Modal"
                            >
                                ×
                            </button>

                            <h2 id="booking-modal-title" className="text-2xl font-bold text-brown-700 mb-4">
                                Book {bookingDetails.service}
                            </h2>
                            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={bookingDetails.name}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-300 focus:ring focus:ring-brown-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={bookingDetails.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-300 focus:ring focus:ring-brown-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={bookingDetails.date}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-300 focus:ring focus:ring-brown-200 focus:ring-opacity-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
                                    <select
                                        id="time"
                                        name="time"
                                        value={bookingDetails.time}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brown-300 focus:ring focus:ring-brown-200 focus:ring-opacity-50"
                                    >
                                        <option value="">Select a time</option>
                                        {generateTimeOptions().map((time) => (
                                            <option key={time} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button
                                    onClick={handleBooking}
                                    className="w-full bg-brown-700 hover:bg-brown-800 text-white font-bold py-2 px-4 rounded"
                                >
                                    Book Appointment
                                </button>
                            </form>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

