'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function CartPage() {
    const { cart, updateQuantity, removeItem } = useCart()

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

    const handleCheckout = () => {
        const message = cart
            .map(item => `${item.name} x ${item.quantity} - R${(item.price * item.quantity).toFixed(2)}`)
            .join('\n');
        const totalMessage = `Total: R${total.toFixed(2)}`;

        const encodedMessage = encodeURIComponent(`${message}\n\n${totalMessage}`);
        const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+27744887713';
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappLink, '_blank');
    };

    return (
        <div className="bg-brown-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-3xl font-extrabold text-brown-900 mb-8">Your Cart</h1>
                {cart.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
                        <Link href="/products">
                            <button className="px-4 py-2 bg-brown-600 text-white rounded-md hover:bg-brown-700 transition-colors">
                                Continue Shopping
                            </button>
                        </Link>
                    </motion.div>
                ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-2 text-sm sm:text-base">Product</th>
                                    <th className="py-2 text-sm sm:text-base">Quantity</th>
                                    <th className="py-2 text-sm sm:text-base">Price</th>
                                    <th className="py-2 text-sm sm:text-base">Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id} className="border-b text-sm sm:text-base">
                                        <td className="py-4 font-medium">{item.name}</td>
                                        <td className="py-4">
                                            <div className="flex items-center">
                                                <button
                                                    className="px-2 py-1 bg-brown-100 text-brown-800 rounded-md"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                >
                                                    -
                                                </button>
                                                <span className="mx-2">{item.quantity}</span>
                                                <button
                                                    className="px-2 py-1 bg-brown-100 text-brown-800 rounded-md"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td className="py-4">R{item.price.toFixed(2)}</td>
                                        <td className="py-4">R{(item.price * item.quantity).toFixed(2)}</td>
                                        <td className="py-4">
                                            <button className="text-red-500 hover:text-red-700" onClick={() => removeItem(item.id)}>
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <p className="text-2xl font-bold mb-4 sm:mb-0">Total: R{total.toFixed(2)}</p>
                            <button
                                onClick={handleCheckout}
                                className="px-4 py-2 bg-brown-600 text-white rounded-md hover:bg-brown-700 transition-colors"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    )
}
