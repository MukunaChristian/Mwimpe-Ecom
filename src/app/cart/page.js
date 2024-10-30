'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function CartPage() {
    const { cart, updateQuantity, removeItem } = useCart()

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

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
                        <table className="w-full">
                            <thead>
                                <tr className="border-b">
                                    <th className="text-left py-2">Product</th>
                                    <th className="text-left py-2">Quantity</th>
                                    <th className="text-left py-2">Price</th>
                                    <th className="text-left py-2">Total</th>
                                    <th className="text-left py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                    <tr key={item.id} className="border-b">
                                        <td className="py-4">
                                            <div className="flex items-center">
                                                <Image src={item.image} alt={item.name} width={50} height={50} className="mr-4 rounded-md" />
                                                {item.name}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex items-center">
                                                <button className="px-2 py-1 bg-brown-100 text-brown-800 rounded-md" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                                <span className="mx-2">{item.quantity}</span>
                                                <button className="px-2 py-1 bg-brown-100 text-brown-800 rounded-md" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                            </div>
                                        </td>
                                        <td>${item.price.toFixed(2)}</td>
                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                        <td>
                                            <button className="text-red-500 hover:text-red-700" onClick={() => removeItem(item.id)}>
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mt-8 flex justify-between items-center">
                            <p className="text-2xl font-bold">Total: ${total.toFixed(2)}</p>
                            <button className="px-4 py-2 bg-brown-600 text-white rounded-md hover:bg-brown-700 transition-colors">
                                Proceed to Checkout
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    )
}