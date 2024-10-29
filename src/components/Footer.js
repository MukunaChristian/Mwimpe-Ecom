import Link from 'next/link'
import { Facebook, Instagram, MessageCircle, MapPin, Phone } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-brown-100 text-brown-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Beauty & Skincare</h3>
                        <p className="text-sm">Enhancing your natural beauty with professional care and natural products.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <MapPin className="w-5 h-5 mr-2" />
                                <span>123 Beauty Street, Skincare City, 12345</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 mr-2" />
                                <a href="tel:+11234567890" className="hover:text-brown-600">+1 (123) 456-7890</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                                <Facebook className="w-6 h-6 hover:text-brown-600" />
                            </Link>
                            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                                <Instagram className="w-6 h-6 hover:text-brown-600" />
                            </Link>
                            <Link href="https://wa.me/11234567890" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
                                <MessageCircle className="w-6 h-6 hover:text-brown-600" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-brown-200 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Beauty & Skincare. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}