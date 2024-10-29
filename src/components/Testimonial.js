import Image from 'next/image'

const testimonials = [
    {
        name: 'Sarah Johnson',
        image: '/placeholder.svg?height=100&width=100',
        quote: 'The facial treatment at Beauty & Glow was amazing! My skin has never looked better.',
    },
    {
        name: 'Michael Brown',
        image: '/placeholder.svg?height=100&width=100',
        quote: 'I was skeptical at first, but the results speak for themselves. Highly recommended!',
    },
    {
        name: 'Emily Davis',
        image: '/placeholder.svg?height=100&width=100',
        quote: 'The staff is knowledgeable and friendly. I always feel pampered after my visits.',
    },
    {
        name: 'David Wilson',
        image: '/placeholder.svg?height=100&width=100',
        quote: 'The personalized skincare routine they created for me has transformed my skin.',
    },
]

export default function Testimonials() {
    return (
        <div className="bg-white min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-brown-600 mb-8 text-center">What Our Clients Say</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-brown-50 rounded-lg shadow-md p-6">
                            <div className="flex flex-col sm:flex-row items-center mb-4">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={100}
                                    height={100}
                                    className="rounded-full mb-4 sm:mb-0 sm:mr-4"
                                />
                                <h2 className="text-xl font-semibold text-brown-600 text-center sm:text-left">{testimonial.name}</h2>
                            </div>
                            <p className="text-brown-800 italic text-center sm:text-left">&ldquo;{testimonial.quote}&rdquo;</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}