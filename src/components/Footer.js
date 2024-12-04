import Link from 'next/link'
import { Facebook, Instagram, MessageCircle, MapPin, Phone } from 'lucide-react'

export default function Footer() {

    return (
        <footer className="bg-brown-100 text-brown-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Mwimpe Beauty X Organics</h3>
                        <p className="text-sm">Enhancing your natural beauty with professional care and natural products.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <MapPin className="w-5 h-5 mr-2" />
                                <span>11 Junction Road Salt River</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="w-5 h-5 mr-2" />
                                <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER}`} className="hover:text-brown-600">
                                    {process.env.NEXT_PUBLIC_PHONE_NUMBER}
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link href={process.env.NEXT_PUBLIC_FACEBOOK_URL || '#'} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                                <Facebook className="w-6 h-6 hover:text-brown-600" />
                            </Link>
                            <Link href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#'} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                                <Instagram className="w-6 h-6 hover:text-brown-600" />
                            </Link>
                            <Link href={process.env.NEXT_PUBLIC_WHATSAPP_URL || '#'} target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-6 h-6 hover:text-brown-600"
                                >
                                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                                    <path d="M9 10a0.5 .5 0 0 0 1 0V9a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1H14a4 4 0 0 1 -4 -4V9" />
                                </svg>


                            </Link>
                            <Link href={process.env.NEXT_PUBLIC_TIKTOK_URL || '#'} target="_blank" rel="noopener noreferrer" aria-label="Follow us on TikTok">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 hover:text-brown-600">
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-brown-200 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Mwimpe Beauty & Organics. All rights reserved.</p>
                </div>
            </div>


        </footer>
    )
}

