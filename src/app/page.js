// Add this at the very top to make this component a client component
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Footer from '@/components/Footer';

// Mock product data - in a real app, this would come from your API
const products = [
  { id: 1, name: 'Natural Face Cream', price: 29.99, image: '/product1.jpg' },
  { id: 2, name: 'Organic Lip Balm', price: 9.99, image: '/product2.jpg' },
  // Add more products as needed
];

export default function Shop() {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cart }),
    });

    if (response.ok) {
      const { id: sessionId } = await response.json();
      stripe?.redirectToCheckout({ sessionId });
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-64 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>
          ))}
          <button
            onClick={handleCheckout}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Checkout
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}
